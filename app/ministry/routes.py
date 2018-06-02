from flask import abort, render_template
from flask_login import current_user, login_required
from flask_socketio import emit
from random import random
from threading import Lock

from app import socketio
from . import ministry

thread = None
thread_lock = Lock()

def rng_thread():
    while True:
        socketio.sleep(1)
        number = round(random()*10, 3)
        print(number)
        socketio.emit('newnumber', {'number': number}, namespace='/ministry')

@ministry.route('/ministry/dashboard')
@login_required
def dashboard():
    if not current_user.is_ministry:
        abort(403)

    return render_template('ministry/dashboard.html', title='Ministry Dashboard'
                                                    , async_mode=socketio.async_mode)

@socketio.on('connect', namespace='/ministry')
def test_connect():
    # need visibility of the global thread object
    global thread
    print('Client connected')

    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(target=rng_thread)

@socketio.on('disconnect', namespace='/ministry')
def test_disconnect():
    print('Client disconnected')