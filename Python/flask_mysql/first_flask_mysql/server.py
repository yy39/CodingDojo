from sqlite3 import connect
from flask import Flask, render_template, redirect, request
from mysqlconnection import connectToMySQL
from user import User
# import the class from friend.py
app = Flask(__name__)


@app.route("/")
def index():
    mysql = connectToMySQL("twitter").query_db("SELECT * FROM USERS;")
    users = mysql
    return render_template("index.html", all_users=users)


@app.route("/users/new")
def new_user():
    return render_template("new_user.html")


@app.route("/users/<int:id>")
def show_user(id):
    user = User.get_user({"id": id})
    return render_template("show_user.html", user=user)


@app.route("/users/edit/<int:id>")
def edit_user(id):
    user = User.get_user({"id": id})
    return render_template("edit_user.html", user=user)
    pass


@app.route("/users/create", methods=["POST"])
def create_user():
    User.create_user(request.form)
    return redirect('/')


@app.route("/users/update", methods=["POST"])
def update_user():
    User.update_user(request.form)
    return redirect('/')


@app.route("/users/<int:id>/delete")
def delete_user(id):
    User.delete_user({"id": id})
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
