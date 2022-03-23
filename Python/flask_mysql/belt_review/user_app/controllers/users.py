from user_app.config.mysqlconnection import queryMySQL
from user_app import application
from user_app.models import user
from flask import render_template, redirect, request, session, flash
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(application)


@application.route("/")
def index():
    if "user_id" in session:
        return redirect("/dashboard")
    return render_template("index.html")


@application.route("/logout")
def logout():
    session.clear()
    return redirect("/")


@application.route("/login")
def login_page():
    if "user_id" in session:
        return redirect("/dashboard")
    return render_template("login.html")


@application.route("/register")
def register_page():
    if "user_id" in session:
        return redirect("/dashboard")
    return render_template("register.html")


@application.route("/login", methods=["POST"])
def login():
    if user.User.validate_login(request.form):
        user_info = user.User.get_by_email({"email": request.form["email"]})
        if not user_info:
            flash("Invalid info")
            return redirect("/login")
        if not bcrypt.check_password_hash(user_info.password, request.form["password"]):
            flash("Invalid info")
            return redirect("/login")
        session["user_id"] = user_info.login(request.form)["id"]
        return redirect("/dashboard")
    return redirect("/login")


@application.route("/create", methods=["POST"])
def create():
    if user.User.validate(request.form):
        if user.User.check_unique(request.form):
            data = {
                "first_name": request.form["first_name"],
                "last_name": request.form["last_name"],
                "email": request.form["email"],
                "password": bcrypt.generate_password_hash(request.form['password'])
            }
            session["user_id"] = user.User.create(data)
            print(session["user_id"])
            return redirect("/dashboard")
    return redirect("/register")
