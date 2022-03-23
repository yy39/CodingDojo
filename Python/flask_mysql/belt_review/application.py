from user_app import application
from user_app.controllers import users, recipes

while __name__ == "__main__":
    application.run(debug=True)
