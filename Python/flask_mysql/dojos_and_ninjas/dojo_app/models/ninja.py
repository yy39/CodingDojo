from flask import request
from dojo_app.config.mysqlconnection import connectToMySQL


class Ninja:
    def __init__(self, data):
        self.dojo_id = data['dojo_id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']

    @classmethod
    def create(cls, data):
        query = "INSERT INTO ninjas (dojo_id, first_name, last_name, age) VALUES (%(dojo_id)s, %(first_name)s, %(last_name)s, %(age)s);"
        connectToMySQL('dojos_and_ninjas').query_db(query, data)

    @classmethod
    def get(cls, data):
        query = "SELECT * FROM ninjas WHERE id = %(id)s;"
        ninja = connectToMySQL('dojos_and_ninjas').query_db(query, data)
        if ninja:
            return cls(ninja[0])
