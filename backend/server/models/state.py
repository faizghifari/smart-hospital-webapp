from backend.server import db

class State(db.Model):
    __tablename__ = 'states'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    state_name = db.Column(db.String(60), nullable=False)
    count_hospitals = db.Column(db.Integer)
    current_safety = db.Column(db.Integer)
    current_security = db.Column(db.Integer)
    current_productivity = db.Column(db.Integer)
    roles = db.relationship('Role', backref='role_state', lazy='dynamic')
    hospitals = db.relationship('Hospital', backref='hospital_state', lazy='dynamic')
    states_history = db.relationship('StateHistory', backref='history_state', lazy='dynamic')

    def __repr__(self):
        return '<State: {}>'.format(self.state_name)

class StateHistory(db.Model):
    __tablename__ = 'states_history'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    state_id = db.Column(db.Integer, db.ForeignKey('states.id'))
    date_time = db.Column(db.DateTime)
    record_safety = db.Column(db.Integer)
    record_security = db.Column(db.Integer)
    record_productivity = db.Column(db.Integer)

    def __repr__(self):
        return '<StateHistory: {}>'.format(self.id)