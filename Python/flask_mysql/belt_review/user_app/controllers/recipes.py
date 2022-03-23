from user_app import application
from user_app.models import user, recipe
from flask import render_template, redirect, request, session, flash


@application.route("/dashboard")
def dashboard():
    if "user_id" in session:
        user_info = user.User.get_by_id({"id": session["user_id"]})
        user_recipes = recipe.Recipe.get_all_user_recipes(
            {"id": session["user_id"]})
        if not user_info:
            session.clear()
            return redirect("/")
        if user_recipes:
            return render_template("dashboard.html", user_info=user_info, user_recipes=user_recipes)
        else:
            return render_template("dashboard.html", user_info=user_info, user_recipes=user_recipes)
    return redirect("/login")


@application.route("/recipes/new")
def new_recipe():
    if "user_id" in session:
        user_info = user.User.get_by_id({"id": session["user_id"]})
        return render_template("new_recipe.html", user_info=user_info)
    return redirect("/login")


@application.route("/recipes/create", methods=["POST"])
def create_recipe():
    if "user_id" in session:
        if not recipe.Recipe.validate(request.form):
            return redirect("/recipes/new")
        new_recipe = recipe.Recipe.create(request.form)
        recipe.Recipe.create_user_recipe(
            {"users_id": session["user_id"], "recipes_id": new_recipe})
    return redirect("/dashboard")


@application.route("/recipes/<int:id>")
def view_recipe(id):
    if "user_id" in session:
        user_info = user.User.get_by_id({"id": session["user_id"]})
    recipe_info = recipe.Recipe.get_by_id({"id": id})
    print(recipe_info)
    return render_template("view_recipe.html", recipe_info=recipe_info, user_info=user_info)


@application.route("/recipes/delete/<int:id>")
def delete(id):
    recipe.Recipe.delete({"id": id})
    return redirect("/dashboard")


@application.route("/recipes/edit/<int:id>")
def edit(id):
    if "user_id" in session:
        user_info = user.User.get_by_id({"id": session["user_id"]})
    if id:
        recipe_info = recipe.Recipe.get_by_id({"id": id})
    return render_template("edit_recipe.html", user_info=user_info, recipe_info=recipe_info)


@application.route("/recipes/update/<int:id>", methods=["POST"])
def update(id):
    if id:
        recipe_info = recipe.Recipe.get_by_id({"id": id})
        recipe.Recipe.update(request.form)
    return redirect("/dashboard")
