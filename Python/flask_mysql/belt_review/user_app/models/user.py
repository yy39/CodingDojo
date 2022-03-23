import re
from user_app.config.mysqlconnection import queryMySQL, queryMySQLData
from flask import flash

ALPHA_REGEX = re.compile(r"^[a-zA-Z0-9]*$")
EMAIL_REGEX = re.compile(r"^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$")


class User:
    def __init__(self, data):
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.email = data["email"]
        self.password = data["password"]

    @classmethod
    def create(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        result = queryMySQLData(query, data)
        return(result)

    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s"
        result = queryMySQLData(query, data)
        if result:
            return cls(result[0])

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s"
        result = queryMySQLData(query, data)
        if result:
            return cls(result[0])

    @classmethod
    def login(cls, data):
        query = "SELECT id FROM users WHERE email = %(email)s"
        result = queryMySQLData(query, data)
        return(result[0])

    @staticmethod
    def get_all():
        query = "SELECT * FROM users"
        result = queryMySQL(query)
        return result

    @staticmethod
    def validate(user):
        print(user)
        is_valid = True
        if not ALPHA_REGEX.match(user["first_name"]):
            flash("First name may only contain alphanumeric characters")
            is_valid = False
        elif len(user["first_name"]) < 2:
            flash("First name must be at least two characters")
            is_valid = False
        if not ALPHA_REGEX.match(user["last_name"]):
            flash("Last name may only contain alphanumeric characters")
            is_valid = False
        if len(user["last_name"]) < 2:
            flash("First name must be at least two characters")
            is_valid = False
        if not EMAIL_REGEX.match(user["email"]):
            flash("Invalid Email Address")
            is_valid = False
        elif len(user["email"]) < 5:
            flash("Email must be at least five characters")
            is_valid = False
        if len(user["password"]) < 8:
            flash("Password must be at least 8 characters long")
            is_valid = False
        if user["confirm_password"] != user["password"]:
            flash("Passwords do not match")
            is_valid = False
        return is_valid

    @staticmethod
    def validate_login(data):
        is_valid = True
        if len(data["email"]) < 5:
            flash("Email must be at least five characters")
            is_valid = False
        if len(data["password"]) < 8:
            flash("Password must be at least 8 characters")
            is_valid = False
        return is_valid

    @staticmethod
    def check_unique(data):
        is_unique = True
        results = queryMySQL("SELECT * FROM users;")
        for result in results:
            if result["email"] == data["email"]:
                flash("Email has already been registered")
                is_unique = False
                return is_unique
        return is_unique
