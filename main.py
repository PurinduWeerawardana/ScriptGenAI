from flask import Flask
from flask import request as FlaskRequest
from flask import Response as FlaskResponse
import re
import openai
import urllib
import numpy as np
from PIL import Image
from tensorflow import keras
from urllib import request
import subprocess

# set API key
openai.api_key = "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"


def generateScripts(slides):
    print("Completing...")
    # list for save generated scripts
    generatedScripts = []
    for slide in slides:
        # create the prompt, substring with regex for remove S1: S2: notation
        promptForGPT = "Write a presentation script->\\n" + \
            re.sub('S\d:', '', slide)
        # call openai for completion
        completion = openai.Completion.create(
            engine="text-davinci-003",
            prompt=promptForGPT,
            temperature=0.7,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0,
            max_tokens=200)
        # append to generated scripts list
        generatedScripts.append(completion.choices[0].text)
    return generatedScripts


app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Welcome to ScriptGenAI!'


@app.route('/generate/<string:fileName>/<string:accessToken>', methods=['GET'])
def generateAll(fileName, accessToken):
    in_file = urllib.request.urlopen(
        "https://firebasestorage.googleapis.com/v0/b/sdgp-squadr.appspot.com/o/files%2F" + fileName + "?alt=media&token=" + accessToken)
    content = in_file.read().decode()
    # split into slides
    slides = content.split('<[[[start]]]>')
    slides = list(filter(None, slides))
    generatedScripts = generateScripts(slides)
    return ',\n'.join(generatedScripts)


@app.route('/predict', methods=['GET'])
def predict():

    model = keras.models.load_model("Chart_Classification_79.h5")

    # Preprocess to convert png(Transparent images) to jpeg
    # Load and preprocess the image

    fileName = '174.png'
    img = Image.open(fileName)
    img = img.resize((300, 300))
    x = np.array(img)
    x = x[:, :, :3]  # Remove the 4th channel
    x = x / 255.  # Scale pixel values to [0, 1]
    x = np.expand_dims(x, axis=0)  # Add an extra dimension

    # Pass the image through the model
    preds = model.predict(x)

    # Get the class with the highest predicted probability
    class_idx = np.argmax(preds[0])

    # Get the class labels from the generator
    # class_labels = train_generator.class_indices

    class_labels = {'Vertical Bar Chart': 0, 'Compound Vertical Bar Chart': 1, 'Horizontal Bar Chart': 2,
                    'Line Chart': 3, 'Multi Line Chart': 4, 'Pie Chart': 5, 'Stacked Vertical Bar Chart': 6}
    class_labels = {v: k for k, v in class_labels.items()}
    # Display the predicted class
    return "The image is predicted as a " + class_labels[class_idx]


@app.route('/check')
def check():
    URL = "https://firebasestorage.googleapis.com/v0/b/sdgp-squadr.appspot.com/o/files%2Fsample_slide_deck.txt?alt=media&token=208755ae-61ca-4f52-9559-10c84d80d9ca"
    response = request.urlretrieve(URL, "presentation.pptx")
    return "Noice!"


@app.route('/presentation', methods=['POST'])
def presentation():
    URL = FlaskRequest.headers['link']
    response = request.urlretrieve(URL, "presentation.pptx")
    responseToClient = FlaskResponse(status=200)
    return responseToClient


if __name__ == "__main__":
    app.run(debug=True)
