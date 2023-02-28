from flask import Flask
import re
import openai
import urllib

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

if __name__ == "__flask_app__":
    app.run(debug=True)
