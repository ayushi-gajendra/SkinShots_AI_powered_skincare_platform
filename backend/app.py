from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return("<h1>Backend Home Page</h1>")

@app.route("/api/data")
def api_data():
    data = {
        "message": "Practicing linking Frontend to Backend"
    }
    return jsonify(data)


if __name__=="__main__":
    app.run(debug=True, port=5000)