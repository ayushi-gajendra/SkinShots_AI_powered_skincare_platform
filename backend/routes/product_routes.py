from flask import Blueprint, jsonify
from models import Product

# A blueprint (like a mini Flask app for this module)
products_bp = Blueprint("products", __name__, url_prefix="/api/products")

@products_bp.route("/", methods=["GET"])
def get_products():
    products = Product.query.all()
    result = []
    for p in products:
        item = {
            "id": p.id,
            "category": p.category,
            "skin_concern": p.skin_concern,
            "name": p.name,
            "description": p.description,
            "price": p.price,
            "image": p.image
        }
        result.append(item)
    return jsonify(result)