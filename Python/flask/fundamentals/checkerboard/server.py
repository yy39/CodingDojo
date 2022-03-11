from flask import Flask, render_template
import math
app = Flask(__name__)


@app.route('/')
def default():
    return render_template('index.html', color1='red', color2='black', x=int(8), y=int(8))


@app.route('/<int:x>')
def changex(x):
    return render_template('index.html', color1='red', color2='black', x=x, y=8)


@app.route('/<int:x>/<int:y>')
def changexy(x, y):
    return render_template('index.html', color1='red', color2='black', x=x, y=y)


@app.route('/<int:x>/<int:y>/<string:color1>')
def changexyc1(x, y, color1):
    return render_template('index.html', color1=color1, color2='black', x=x, y=y)


@app.route('/<int:x>/<int:y>/<string:color1>/<string:color2>')
def changexyc1c2(x, y, color1, color2):
    return render_template('index.html', color1=color1, color2=color2, x=x, y=y)


if __name__ == '__main__':
    app.run(debug=True)
