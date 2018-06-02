from flask import Blueprint

ministry = Blueprint('ministry', __name__)

from . import routes, controllers