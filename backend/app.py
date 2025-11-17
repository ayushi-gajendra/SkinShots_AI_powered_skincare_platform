from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from openai import OpenAI
from dotenv import load_dotenv
from models import db
from routes.product_routes import products_bp
from routes.personalised_products_routes import personalised_products_bp


load_dotenv()

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}})

    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///skinshots_db.sqlite3"
    db.init_app(app)

    app.register_blueprint(products_bp)
    
    app.register_blueprint(personalised_products_bp)

    @app.route("/")
    def home():
        return("<h1>Backend Home Page</h1>")

    @app.route("/api/data")
    def api_data():
        data = {
            "message": "Practicing linking Frontend to Backend"
        }
        return jsonify(data)
    
    return app


if __name__=="__main__":
    app = create_app()
    app.run(debug=True, port=5000)