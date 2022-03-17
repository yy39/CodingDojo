from dojo_app import app
from flask import render_template, redirect, request, session
from dojo_app.config.mysqlconnection import MySQLConnection, connectToMySQL
from dojo_app.models.dojo import Dojo
from dojo_app.models.ninja import Ninja


@app.route('/')
def redirect_dojos():
    return redirect('/dojos')


@app.route('/dojos')
def show_all_dojos():
    result = Dojo.get_all()
    return render_template('dojos.html', dojos=result)


@app.route('/dojos/<int:id>')
def show_dojo(id):
    dojo_result = Dojo.get({'id': id})
    ninjas_result = Dojo.get_all_ninjas({'id': id})
    return render_template('dojo.html', dojo=dojo_result, ninjas=ninjas_result)


@app.route('/dojos/create', methods=['POST'])
def create():
    Dojo.create(request.form)
    return redirect('/')
