from flask import Flask, jsonify
from flask_cors import CORS
from flask import request as FlaskRequest
from flask import Response as FlaskResponse
import openai
import re
import urllib
from urllib import request
import ppextractmodule



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
        print(completion.choices[0].text)
        generatedScripts.append(completion.choices[0].text)
    return generatedScripts

def generateSingleScript(slides):
    print("Completing...")
    # list for save generated scripts
    generatedScript = ""
    # create the prompt, substring with regex for remove S1: S2: notation
    promptForGPT = "Write a presentation script for these slides->\\n" + slides
    # call openai for completion
    completion = openai.Completion.create(
        engine="text-davinci-003",
        prompt=promptForGPT,
        temperature=0.7,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        max_tokens=3500)
    # append to generated scripts list
    print(completion.choices[0].text)
    generatedScripts = completion.choices[0].text
    return generatedScripts


app = Flask(__name__)
cors = CORS(app, resources={r"/scripts": {"origins": "*"}})

@app.route('/')
def hello_world():
    return 'Hello from ScriptGenAI'

def extractAndGenerate():
    output = ppextractmodule.process("presentation.pptx")
    generated = generateSingleScript(output)
    return generated

@app.route('/scripts', methods=['GET'])
def scripts():
    URL = FlaskRequest.headers['link']
    response = request.urlretrieve(URL, "presentation.pptx")
    script = extractAndGenerate()
    data = {'script': script}
    return jsonify(data)

