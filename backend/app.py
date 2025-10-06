from flask import Flask, jsonify, request, render_template, redirect, url_for
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "Flask backend is running!"})

@app.route("/ai-analysis", methods=["POST"])
def ai_analysis():
    data = request.json
    return jsonify({"received_data": data, "analysis": "This is a mock AI analysis."}) 

@app.route("/shop")
def shop():
    return jsonify({"message": "Welcome to the shop!"})




if __name__=="__main__":
    app.run(debug=True, port=5000)