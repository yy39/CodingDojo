from user_app.config.mysqlconnection import queryMySQL
from user_app import app
from user_app.models.user import User
from flask import render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)


@app.route("/")
def index():
    if "id" in session:
        user = User.get_by_id({"id": session["id"]})
        return render_template("index.html", logged_in_user=user)
    return render_template("index.html")


@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")


@app.route("/login", methods=["POST"])
def login():
    if User.validate_login(request.form):
        user = User.get_by_email({"email": request.form["login_email"]})
        if not user:
            flash("Invalid info")
            return redirect("/")
        if not bcrypt.check_password_hash(user.password, request.form["login_password"]):
            flash("Invalid info")
            return redirect("/")
        login_user = user.login({"email": request.form["login_email"]})
        print("checking for id")
        session["id"] = login_user["id"]
    return redirect("/")


@app.route("/create", methods=["POST"])
def create():
    if User.validate(request.form):
        if User.check_unique(request.form):
            data = {
                "first_name": request.form["first_name"],
                "last_name": request.form["last_name"],
                "email": request.form["email"],
                "password": bcrypt.generate_password_hash(request.form['password'])
            }
            session["userid"] = User.create(data)
            print(session["userid"])
            return redirect("/")
    return redirect("/")
