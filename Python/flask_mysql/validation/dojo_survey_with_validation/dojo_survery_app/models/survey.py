from dojo_survery_app.config.mysqlconnection import connectToMySQL
from flask import flash


class Survey:
    def __init__(self, data):
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']

    @classmethod
    def create(cls, data):
        query = 'INSERT INTO dojo_survey (name, location, language, comment) VALUES (%(name)s, %(location)s, %(language)s, %(comment)s);'
        survey = connectToMySQL('dojo_survey').query_db(query, data)
        return survey

    @classmethod
    def get(cls, data):
        query = 'SELECT * FROM dojo_survey WHERE id = %(id)s;'
        survey = connectToMySQL('dojo_survey').query_db(query, data)
        if survey:
            print(cls(survey[0]))
            return cls(survey[0])

    @staticmethod
    def validate(survey):
        is_valid = True
        if len(survey['name']) < 3:
            flash('Name must be at least 3 characters.')
            is_valid = False
        if len(survey['name']) > 45:
            flash('Name must be less than 45 characters.')
            is_valid = False
        if survey['location'] == 'Select a location':
            flash('Please select a location.')
            is_valid = False
        if survey['language'] == 'Select a language':
            flash('Please select a language.')
            is_valid = False
        if len(survey['comment']) < 3:
            flash('Comment must be at least 3 characters.')
            is_valid = False
        if len(survey['comment']) > 45:
            flash('Comment must be less than 45 characters.')
            is_valid = False
        return is_valid
