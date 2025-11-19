import google.generativeai as genai
from flask import Blueprint, jsonify, request
from models import Product
import os
import json


personalised_products_bp = Blueprint("personalised_products", __name__, url_prefix="/api/personalised-products")

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))


@personalised_products_bp.route("", methods=["POST"])
@personalised_products_bp.route("/", methods=["POST"])
def personalised_products():
    data = request.get_json()
    answers = data.get("answers", {})

    #fetch the products from db
    products = Product.query.all()
    products_list = [
        {
            "id": p.id,
            "category": p.category,
            "skin_concern": p.skin_concern,
            "name": p.name,
            "description": p.description,
            "price": p.price,
            "image": p.image
        }
        for p in products
    ]

    prompt = f"""
    You are a professional skincare expert.

    The user has the following profile:
    {json.dumps(answers, indent=2)}

    Here is our product catalog (use ONLY these products):
    {json.dumps(products_list, indent=2)}

    Your tasks:
    1. Recommend EXACTLY ONE product from EACH unique category in the catalog.
    2. Recommendations must use ONLY the products provided. No hallucinated or new products.
    3. Include a short explanation ("reason") for why each product fits the user's profile.
    4. Create a personalized skincare routine, with separate "day" and "night" sections.
    5. Output MUST be valid JSON ONLY — no explanation text.

    Your response MUST follow this exact JSON structure:

    {{
    "recommendations": [
        {{
        "id": 1,
        "name": "Salicylic Acid 2% Gel Cleanser",
        "category": "Cleanser",
        "skinConcern": "Acne",
        "price": (from the products_list),
        "image": (from the products_list),
        "reason": (Use second-person language. Understand how this will be useful based on the answers given)
        }}
    ],
    "dayRoutine": [
        {{
            "stepNumber": "1",
            "id": 1,
            "name": "Salicylic Acid 2% Gel Cleanser",
            "category": "Cleanser",
            "image": (from the products_list),
            "howToApply": give proper description
        }}
    ],
    "nightRoutine": [
        {{
            "stepNumber": "1",
            "id": 1,
            "name": "Salicylic Acid 2% Gel Cleanser",
            "category": "Cleanser",
            "image": (from the products_list),
            "howToApply": give proper description
        }}
    ]
    }}
        

    Rules:
    - Do NOT add text before or after the JSON.
    - Do NOT create new product names or IDs.
    - ALWAYS return valid JSON.
    - Give descriptive day and night routines.
    """

    model = genai.GenerativeModel("gemini-2.0-flash-lite")
    response = model.generate_content(
        prompt,
        generation_config={
            "response_mime_type": "application/json"
        }
    )
    result_text = response.text

    data_json = json.loads(result_text)

    recommendations = data_json["recommendations"]
    dayRoutine = data_json["dayRoutine"]
    nightRoutine = data_json["nightRoutine"]

    return jsonify({
        "recommendations": recommendations,
        "dayRoutine": dayRoutine,
        "nightRoutine": nightRoutine
    })


    