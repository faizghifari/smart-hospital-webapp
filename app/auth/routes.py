from flask import flash, render_template, redirect, url_for
from flask_login import login_required, login_user, logout_user

from . import auth
from controllers import RegistrationControl, LoginControl
from app.models import db
from ..models.user import User

@auth.route('/register', methods=['GET', 'POST'])
def register():
    regist_form = RegistrationControl()
    if regist_form.validate_on_submit():
        user = User(email=regist_form.email.data,
                    username=regist_form.username.data,
                    password=regist_form.password.data)
        
        db.session.add(user)
        db.session.commit()
        flash('User registered successfuly')

        return redirect(url_for('auth.login'))
    
    return render_template('auth/register.html', form=regist_form, title='Register')

@auth.route('/login', methods=['GET', 'POST'])
def login():
    login_form = LoginControl()
    if login_form.validate_on_submit():
        user = User.query.filter_by(email=login_form.field.data).first()
        if user is not None and user.verify_password(login_form.password.data):
            login_user(user)

            return redirect(url_for('index.dashboard'))

        else:
            flash('Invalid credentials')

    return render_template('auth/login.html', form=login_form, title='Login')

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    flash('You have logged out')

    return redirect(url_for('auth.login'))
