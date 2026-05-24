import numpy as np

from tensorflow.keras.models import load_model

model = load_model("skin_model.h5")

class_names = ['acne', 'eczema']

def predict_image(image):

    image = image.resize((128,128))

    image = np.array(image) / 255.0

    image = np.expand_dims(image, axis=0)

    prediction = model.predict(image)

    predicted_class = class_names[
        np.argmax(prediction)
    ]

    confidence = float(
        np.max(prediction)
    ) * 100

    return predicted_class, confidence