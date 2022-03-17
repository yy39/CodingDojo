from dojo_app.config.mysqlconnection import connectToMySQL
from flask import request


class Dojo:
    def __init__(self, data):
        self.name = data['name']

    @classmethod
    def create(cls, data):
        query = "INSERT INTO dojos (name) VALUES (%(name)s);"
        connectToMySQL('dojos_and_ninjas').query_db(query, data)

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos"
        dojos = connectToMySQL('dojos_and_ninjas').query_db(query)
        if dojos:
            return dojos

    @classmethod
    def get(cls, data):
        query = "SELECT * FROM dojos WHERE id = %(id)s;"
        dojo = connectToMySQL('dojos_and_ninjas').query_db(query, data)
        if dojo:
            return cls(dojo[0])

    @classmethod
    def get_all_ninjas(cls, data):
        query = "SELECT name, first_name, last_name, age FROM dojos JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        ninjas = connectToMySQL('dojos_and_ninjas').query_db(query, data)
        if ninjas:
            return ninjas
