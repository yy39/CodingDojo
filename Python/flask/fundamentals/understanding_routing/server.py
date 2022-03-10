from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/dojo')
def dojo():
    return 'Dojo!'


@app.route('/say/<name>')
def say(name):
    return(f'Hi {name.capitalize()}!')


@app.route('/repeat/<num>/<phrase>')
def repeat(num, phrase):
    newstr = ''
    for x in range(0, int(num)):
        newstr += phrase
    return newstr


if __name__ == "__main__":
    app.run(debug=True)
