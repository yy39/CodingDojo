from flask import flash, session
from user_app.config.mysqlconnection import queryMySQL, queryMySQLData
import re
ALPHA_REGEX = re.compile(r"^[a-zA-Z0-9 ]*$")
DATE_REGEX = re.compile(r"^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$")


class Recipe:
    def __init__(self, data):
        self.name = data["name"]
        self.description = data["descrption"]
        self.instructions = data["instructions"]
        self.created_at = data["created_at"]
        self.under_thirty = data["under_thirty"]

    @classmethod
    def create(cls, data):
        query = "INSERT INTO recipes (name, description, instruction, under_thirty, created_at) VALUES (%(name)s, %(description)s, %(instruction)s, %(under_thirty)s, %(created_at)s);"
        result = queryMySQLData(query, data)
        if result:
            return(result)

    @classmethod
    def update(cls, data):
        query = "UPDATE recipes SET name=%(name)s, description=%(description)s, instruction=%(instruction)s, under_thirty=%(under_thirty)s"
        queryMySQLData(query, data)

    @classmethod
    def delete(cls, data):
        query1 = "DELETE FROM user_recipes WHERE recipes_id = %(id)s;"
        query2 = "DELETE FROM recipes WHERE id = %(id)s"
        queryMySQLData(query1, data)
        queryMySQLData(query2, data)

    @classmethod
    def create_user_recipe(cls, data):
        query = "INSERT INTO user_recipes (users_id, recipes_id) VALUES (%(users_id)s, %(recipes_id)s)"
        result = queryMySQLData(query, data)
        if result:
            return result

    @classmethod
    def get_all_user_recipes(cls, data):
        query = "SELECT user_recipes.id, recipes_id, users.id as users_id, first_name, recipes.name, under_thirty, recipes.created_at FROM user_recipes JOIN users ON user_recipes.users_id = users.id JOIN recipes ON recipes_id = recipes.id;"
        result = queryMySQLData(query, data)
        if result:
            return result

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s"
        result = queryMySQLData(query, data)
        if result:
            return result[0]

    @staticmethod
    def get_all():
        query = "SELECT * FROM recipes"
        result = queryMySQL(query)
        if result:
            return result

    @staticmethod
    def validate(recipe):
        print(recipe)
        is_valid = True
        if not ALPHA_REGEX.match(recipe["name"]):
            flash("Name may only contain alphanumeric characters")
            is_valid = False
        elif len(recipe["name"]) < 2:
            flash("First name must be at least two characters")
            is_valid = False
        if len(recipe["description"]) < 10:
            flash("Description must be at least ten characters")
            is_valid = False
        if not recipe["created_at"]:
            flash("Please select a date.")
            is_valid = False
        if not "under_thirty" in recipe:
            flash("Please select an option for 'Under 30 min?'")
            is_valid = False
        elif int(recipe["under_thirty"]) not in [0, 1]:
            print(recipe["under_thirty"])
            flash("Please select a valid option for 'Under 30 min?'")
            is_valid = False
        return is_valid
