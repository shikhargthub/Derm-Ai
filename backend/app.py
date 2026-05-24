from flask import Flask
from flask import request
from flask import jsonify

from flask_cors import CORS

from PIL import Image

from predict import predict_image

from disease_info import disease_info

app = Flask(__name__)

CORS(app)


@app.route('/')
def home():
    return "Skin Disease Detector Backend Running!"
@app.route('/predict', methods=['POST'])

def predict():

    if 'image' not in request.files:

        return jsonify({
            "error": "No image uploaded"
        })

    file = request.files['image']

    image = Image.open(file)

    disease, confidence = predict_image(image)

    info = disease_info[disease]

    return jsonify({

        "disease": disease,

        "confidence": round(confidence, 2),

        "description":
        info["description"],

        "treatment":
        info["treatment"],

        "medicine":
        info["medicine"],

        "warning":
        "This is not medical advice."
    })

if __name__ == '__main__':

    app.run(debug=True)