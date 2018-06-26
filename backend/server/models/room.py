from backend.server import db

class Room(db.Model):
    __tablename__ = 'rooms'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    room_name = db.Column(db.String(60), nullable=False)
    room_pic = db.Column(db.String(60)) # refer to staff/person/etc.
    current_safety = db.Column(db.Integer)
    current_security = db.Column(db.Integer)
    current_productivity = db.Column(db.Integer)
    level_id = db.Column(db.Integer, db.ForeignKey('levels.id'))
    rooms_history = db.relationship('RoomHistory',
                                     backref='history_room',
                                     lazy='dynamic')
    rooms_safety = db.relationship('RoomSafety',
                                    backref='safety_room',
                                    lazy='dynamic')
    rooms_security = db.relationship('RoomSecurity',
                                      backref='security_room',
                                      lazy='dynamic')
    rooms_productivity = db.relationship('RoomProductivity',
                                          backref='productivity_room',
                                          lazy='dynamic')

    def __repr__(self):
        return '<Room {}>'.format(self.room_name)

class RoomHistory(db.Model):
    __tablename__ = 'rooms_history'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'))
    date_time = db.Column(db.DateTime)
    record_safety = db.Column(db.Integer)
    record_security = db.Column(db.Integer)
    record_productivity = db.Column(db.Integer)

    def __repr__(self):
        return '<RoomHistory {}>'.format(self.id)

class RoomSafety(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'))
    current_temperature = db.Column(db.Integer)
    current_humidity = db.Column(db.Integer)
    current_smoke = db.Column(db.Integer)
    current_co = db.Column(db.Integer)
    current_methane = db.Column(db.Integer)
    current_lpg = db.Column(db.Integer)
    current_light = db.Column(db.Integer)
    current_led = db.Column(db.Integer)
    current_freq = db.Column(db.Integer)

    def __repr__(self):
        return '<RoomSafety {}>'.format(self.id)

class RoomSecurity(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'))
    is_unauthorized = db.Column(db.Boolean)
    is_locked = db.Column(db.Boolean)
    is_pic_exist = db.Column(db.Boolean)

    def __repr__(self):
        return '<RoomSecurity {}>'.format(self.id)

class RoomProductivity(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'))
    count_usage = db.Column(db.Integer)
    standard_usage = db.Column(db.Integer)

    def __repr__(self):
        return '<RoomProductivity {}>'.format(self.id)