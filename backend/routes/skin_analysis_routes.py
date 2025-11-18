from flask import  Blueprint, jsonify, request
import requests, random
import os


skin_analysis_bp = Blueprint("skin_analysis", __name__, url_prefix = "/api/skin-analysis")

@skin_analysis_bp.route("/", methods = ["GET"])
def skin_analysis():
    
    api_key = os.getenv('API_KEY')
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Accept": "application/json"
    }
    response = requests.get("http://127.0.0.1:5000/api/products/", headers = headers)
    response.raise_for_status()

    products_data = response.json()

    skin_concerns_set = {product["skin_concern"] for product in products_data}

    skin_concern = random.choice(list(skin_concerns_set))

    return jsonify(
        {"skin_concern": skin_concern}
    )