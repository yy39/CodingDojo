from flask import Flask, render_template, redirect, request, session
from dojo_survery_app import app
from dojo_survery_app.config.mysqlconnection import connectToMySQL
from dojo_survery_app.models.survey import Survey


@app.route('/')
def survey():
    print(request.form)
    connectToMySQL('dojo_survey').query_db('select * from dojo_survey;')
    return render_template('survey.html')


@app.route('/create', methods=['POST'])
def create():
    if not Survey.validate(request.form):
        return redirect('/')
    survey = Survey.create(request.form)
    return redirect(f'/result/{survey}')


@app.route('/result/<int:id>')
def show_result(id):
    submitted_info = Survey.get({"id": id})
    return render_template('result.html', info=submitted_info)
