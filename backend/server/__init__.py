# backend/server/__init__.py

import os

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager

app = Flask(__name__)

app_settings = os.getenv(
    'APP_SETTINGS',
    'backend.server.config.DevelopmentConfig'
)
app.config.from_object(app_settings)

db = SQLAlchemy(app)
jwt = JWTManager(app)

from backend.server.models.token import RevokedToken

@jwt.token_in_blacklist_loader
def check_token_revoked(decrypted_token):
    jti = decrypted_token['jti']
    return RevokedToken.is_token_revoked(jti)

from .auth import auth as auth_blueprint
app.register_blueprint(auth_blueprint)
