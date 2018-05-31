from app.models import db

class Hospital(db.Model):
    __tablename__ = 'hospitals'

    id = db.Column(db.Integer, primary_key=True)
    hospital_name = db.Column(db.String, index=True, nullable=False)
    state_id = db.Column(db.Integer, db.ForeignKey('states.id'))
    roles = db.relationship('Role', backref='state', lazy='dynamic')

    def __repr__(self):
        return '<Hospital {}>'.format(self.hospital_name)