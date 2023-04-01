from flask import Flask
import glob
import sys
import ReadGraphOCR
import openai
import re

app = Flask(__name__)
openai.api_key = "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" #openAI api key

@app.route('/')
def home():
    return 'Hello, World!'


@app.route('/about')
def about():
    return 'About'


@app.route('/predict', methods=['GET'])
def predict():
    imagelist = ['sss.png', 'VBC71.jpg', 'asd.jpg'] #add the images from the presentation to this list
    generatedScriptGraph = []
    for i in imagelist:
        graphInfo = ReadGraphOCR.readGraph(i)
        if(graphInfo != "False"):
            promptForGPT = "Write a 50 word Description about the following graph. use the following coordinated to get a better understanding->\\n" + \
            re.sub('S\d:', '', graphInfo)
   
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
            generatedScriptGraph.append(completion.choices[0].text)
        

    for i in generatedScriptGraph: #REMOVE THIS
        print(i)
    
    return generatedScriptGraph
    

app.run(debug=False)
