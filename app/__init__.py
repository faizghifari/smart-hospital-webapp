from flask import Flask
from flask_bootstrap import Bootstrap
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

from config import app_config

login_manager = LoginManager()

def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile('config.py')

    Bootstrap(app)

    from .models import db, user, hospital, state, role

    Migrate(app, db)
    db.init_app(app)

    login_manager.init_app(app)
    login_manager.login_message = "You must be logged in to access this page"
    login_manager.login_view = "auth.login"

    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    from .index import index as index_blueprint
    app.register_blueprint(index_blueprint)

    from .ministry import ministry as ministry_blueprint
    app.register_blueprint(ministry_blueprint)

    return app
