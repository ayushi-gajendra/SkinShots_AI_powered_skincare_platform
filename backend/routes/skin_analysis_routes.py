from flask import  Blueprint, jsonify, request
import requests, random
import tensorflow as tf
import numpy as np
from keras.utils import load_img, img_to_array
import os


skin_analysis_bp = Blueprint("skin_analysis", __name__, url_prefix = "/api/skin-analysis")

SKIN_CLASSES = ["acne", "blackheads", "dark spots", "pores", "wrinkles"] 

model = tf.keras.models.load_model("./models/SkinShots_model.keras")

def predict_skin_concern(image_path):
    '''Predicts skin concern by integrating the tensorflow model'''

    img = tf.keras.utils.load_img(image_path, target_size=(256, 256))       # Load image
    img_array = tf.keras.utils.img_to_array(img).astype("float32")          # Convert to array 
    img_array = np.expand_dims(img_array, axis=0)                           # Add batch dimension

    prediction = model.predict(img_array)                                   # Predict
    predicted_index = np.argmax(prediction)

    return SKIN_CLASSES[predicted_index]   


@skin_analysis_bp.route("/", methods = ["POST"])
def skin_analysis():

    if "image" not in request.files:
        return jsonify ({"error":"No image uploaded"}), 400

    image = request.files["image"]
    image_save_path = "temp_image.jpg"
    image.save(image_save_path)        # save image temporarily
    skin_concern = predict_skin_concern(image_save_path)

    os.remove(image_save_path)          # cleanup

    return jsonify(
        {"skin_concern": skin_concern}
    )