from app.models import db

class State(db.Model):
    __tablename__ = 'states'

    id = db.Column(db.Integer, primary_key=True)
    state_name = db.Column(db.String, index=True, nullable=False)
    roles = db.relationship('Role', backref='state', lazy='dynamic')
    hospitals = db.relationship('Hospital', backref='hospital', lazy='dynamic')

    def __repr__(self):
        return '<State: {}>'.format(self.state_name)