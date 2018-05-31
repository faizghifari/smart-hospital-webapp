from flask import redirect, url_for
from . import index

@index.route('/')
def home():
    return redirect(url_for('auth.login'))
