from backend.server import db

class Level(db.Model):
    __tablename__ = 'levels'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    level_name = db.Column(db.String(60), nullable=False)
    level_pic = db.Column(db.String(60), nullable=True) # refer to staff/person/etc.
    count_rooms = db.Column(db.Integer)
    current_safety = db.Column(db.Integer)
    current_security = db.Column(db.Integer)
    current_productivity = db.Column(db.Integer)
    building_id = db.Column(db.Integer, db.ForeignKey('buildings.id'))
    rooms = db.relationship('Room', backref='room_level', lazy='dynamic')
    levels_history = db.relationship('LevelHistory',
                                     backref='history_level',
                                     lazy='dynamic')

    def __repr__(self):
        return '<Level {}>'.format(self.level_name)

class LevelHistory(db.Model):
    __tablename__ = 'levels_history'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    level_id = db.Column(db.Integer, db.ForeignKey('levels.id'))
    date_time = db.Column(db.DateTime)
    record_safety = db.Column(db.Integer)
    record_security = db.Column(db.Integer)
    record_productivity = db.Column(db.Integer)

    def __repr__(self):
        return '<LevelHistory {}>'.format(self.id)