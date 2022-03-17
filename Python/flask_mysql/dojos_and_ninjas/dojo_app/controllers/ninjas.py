from dojo_app import app
from flask import render_template, redirect, request, session
from dojo_app.models.dojo import Dojo
from dojo_app.models.ninja import Ninja


@app.route('/ninjas/new')
def new_ninja():
    result = Dojo.get_all()
    return render_template('new_ninja.html', dojos=result)


@app.route('/ninjas/create', methods=['POST'])
def create_ninja():
    Ninja.create(request.form)
    redirect_url = '/dojos/' + request.form['dojo_id']
    return redirect(redirect_url)
    w
