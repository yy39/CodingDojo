from distutils.log import debug
from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'a not so secret secret'


@app.route('/')
def index():
    if not session:
        number = random.randrange(1, 101)
    return render_template("index.html", number)


@app.route('/guess', methods=['POST'])
def guess():

    return redirect('/')

# @app.route('/guess', methods=['POST'])
# def guess():
#     number = random.randrange(1, 101)
#     print(request.form)
#     print(number)
#     if int(request.form['guess']) == number:
#         session['win'] = True
#     else:
#         session['win'] = False
#     return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
