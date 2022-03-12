from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'not very secret secret key'


@app.route("/")
def index():
    if session:
        print("Session Info")
        print(session)
        if session['action'] == 'Increment':
            session['counter'] += 1
        else:
            session.clear()
    if not session:
        session['counter'] = 1
    counter = session['counter']
    return render_template("index.html", counter=counter)


@ app.route('/button_click', methods=['POST'])
def increment():
    session['action'] = request.form['action']
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
