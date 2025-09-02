from flask import Flask, jsonify, request
from flask_cors import CORS


app=Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "Flask backend is running!"})


@app.route("/shop")
def shop():
    return jsonify({"message": "Welcome to the shop!"})




if __name__=="__main__":
    app.run(debug=True)