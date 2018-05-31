from app.models import db

class Role(db.Model):
    __tablename__ = 'roles'

    id = db.Column(db.Integer, primary_key=True)
    scope = db.Column(db.String(60), nullable=False)
    state_id = db.Column(db.Integer, db.ForeignKey('states.id'))
    hospital_id = db.Column(db.Integer, db.ForeignKey('hospitals.id'))
    users = db.relationship('User', backref='role', lazy='dynamic')

    def __repr__(self):
        return '<Role: {}>'.format(self.scope)
