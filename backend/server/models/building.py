from backend.server import db

class Building(db.Model):
    __tablename__ = 'buildings'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    building_name = db.Column(db.String(60), nullable=False)
    building_pic = db.Column(db.String(60)) # refer to a staff
    count_levels = db.Column(db.Integer)
    count_rooms = db.Column(db.Integer)
    current_safety = db.Column(db.Integer)
    current_security = db.Column(db.Integer)
    current_productivity = db.Column(db.Integer)
    hospital_id = db.Column(db.Integer, db.ForeignKey('hospitals.id'))
    levels = db.relationship('Level', backref='level_building', lazy='dynamic')
    buildings_history = db.relationship('BuildingHistory',
                                        backref='history_building',
                                        lazy='dynamic')

    def __repr__(self):
        return '<Building {}>'.format(self.building_name)

class BuildingHistory(db.Model):
    __tablename__ = 'buildings_history'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    building_id = db.Column(db.Integer, db.ForeignKey('buildings.id'))
    date_time = db.Column(db.DateTime)
    record_safety = db.Column(db.Integer)
    record_security = db.Column(db.Integer)
    record_productivity = db.Column(db.Integer)

    def __repr__(self):
        return '<BuildingHistory {}>'.format(self.id)