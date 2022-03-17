from mysqlconnection import connectToMySQL
from flask import request


class User:
    def __init__(self, data):
        # data is a dictionary
        self.id = data["id"]
        self.first_name = data["first_name"]
        self.last_name = data["last_name"]
        self.handle = data["handle"]
        self.birthday = data["birthday"]
        self.created_at = data["created_at"]
        self.updated_at = data["updated_at"]

    @classmethod
    def create_user(cls, data):
        mysql = connectToMySQL("twitter")

        query = "INSERT INTO users (first_name, last_name, handle, birthday) VALUES (%(first_name)s, %(last_name)s, %(handle)s, %(birthday)s)"

        # will return the id of the user created
        return mysql.query_db(query, data)
        # return connectToMySQL("twitter").query_db(query, data)

    @classmethod
    def get_user(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL("twitter").query_db(query, data)
        if results:
            return cls(results[0])

        # return connectToMySQL("twitter").query_db(query, data)

    @classmethod
    def update_user(cls, data):
        query = "UPDATE users SET first_name = %(first_name)s, last_name= %(last_name)s, handle=%(handle)s, birthday=%(birthday)s WHERE id = %{id}s;"
        connectToMySQL("twitter").query_db(query, data)
        # update functions do NOT return any data

    @classmethod
    def delete_user(cls, data):
        query = "DELETE from users WHERE id = %(id)s"
        connectToMySQL("twitter").query_db(query, data)
