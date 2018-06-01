from flask import abort, render_template
from flask_login import current_user, login_required

from . import ministry

@ministry.route('/ministry/dashboard')
@login_required
def dashboard():
    if not current_user.is_ministry:
        abort(403)
    
    return render_template('ministry/dashboard.html', title='Ministry Dashboard')
