from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Welcome to ScriptGenAI!'


if __name__ == "__flask_app__":
    app.run(debug=True)
