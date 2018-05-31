from app.models import db

class Hospital(db.Model):
    __tablename__ = 'hospitals'

    id = db.Column(db.Integer, primary_key=True)
    hospital_name = db.Column(db.String(60), nullable=False)
    count_buildings = db.Column(db.Integer)
    count_rooms = db.Column(db.Integer)
    state_id = db.Column(db.Integer, db.ForeignKey('states.id'))
    roles = db.relationship('Role', backref='hospital_role', lazy='dynamic')
    hospitals_history = db.relationship('HospitalHistory',
                                        backref='hospital_history',
                                        lazy='dynamic')

    def __repr__(self):
        return '<Hospital {}>'.format(self.hospital_name)

class HospitalHistory(db.Model):
    __tablename__ = 'hospitals_history'

    id = db.Column(db.Integer, primary_key=True)
    hospital_id = db.Column(db.Integer, db.ForeignKey('hospitals.id'))
    date_time = db.Column(db.DateTime)
    record_safety = db.Column(db.Integer)
    record_security = db.Column(db.Integer)
    record_productivity = db.Column(db.Integer)

    def __repr__(self):
        return '<HospitalHistory: {}>'.format(self.id)
 