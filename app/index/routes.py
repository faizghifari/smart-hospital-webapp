from flask import redirect, url_for, render_template
from flask_login import login_required, current_user
from . import index

@index.route('/')
def home():
    return redirect(url_for('auth.login'))

@index.route('/dashboard')
@login_required
def dashboard():
    return render_template('index/dashboard.html', title='Dashboard')
