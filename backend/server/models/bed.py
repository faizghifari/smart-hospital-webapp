from backend.server import db

class Bed(db.Model):
    __tablename__ = 'beds'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    bed_name = db.Column(db.String(60), nullable=False)
    bed_desc = db.Column(db.String(120))
    bed_loc = db.Column(db.String(60)) # refer to a place (room, level, or building)
    bed_pic = db.Column(db.String(60)) # refer to staff/person/etc.
    bed_status = db.Column(db.Boolean) # refer to (used, unused, etc.) need to list more
    production_date = db.Column(db.DateTime)
    is_used = db.Column(db.Boolean)
    current_safety = db.Column(db.Integer)
    current_security = db.Column(db.Integer)
    current_productivity = db.Column(db.Integer)
    bed_history = db.relationship('BedHistory',
                                   backref='history_bed',
                                   lazy='dynamic')
    bed_safety = db.relationship('BedSafety',
                                  backref='safety_bed',
                                  lazy='dynamic')
    bed_security = db.relationship('BedSecurity',
                                    backref='security_bed',
                                    lazy='dynamic')
    bed_productivity = db.relationship('BedProductivity',
                                        backref='productivity_bed',
                                        lazy='dynamic')

    def __repr__(self):
        return '<Bed {}>'.format(self.bed_name)

class BedHistory(db.Model):
    __tablename__ = 'beds_history'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    bed_id = db.Column(db.Integer, db.ForeignKey('beds.id'))
    date_time = db.Column(db.DateTime)
    record_safety = db.Column(db.Integer)
    record_security = db.Column(db.Integer)
    record_productivity = db.Column(db.Integer)

    def __repr__(self):
        return '<BedHistory {}>'.format(self.history_bed.bed_name)

class BedSafety(db.Model):
    __tablename__ = 'beds_safety'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    bed_id = db.Column(db.Integer, db.ForeignKey('beds.id'))
    bed_age = db.Column(db.Integer)
    last_maintenance_date = db.Column(db.DateTime)
    standar_maintenance = db.Column(db.Integer)
    is_reported = db.Column(db.Boolean)

    def __repr__(self):
        return '<BedSafety {}>'.format(self.safety_bed.current_safety)

class BedSecurity(db.Model):
    __tablename__ = 'beds_security'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    bed_id = db.Column(db.Integer, db.ForeignKey('beds.id'))
    current_loc = db.Column(db.String(60)) # refer to a place
    current_pic = db.Column(db.String(60)) # refer to a staff

    def __repr__(self):
        return '<BedSecurity {}>'.format(self.security_bed.current_security)

class BedProductivity(db.Model):
    __tablename__ = 'beds_productivity'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    bed_id = db.Column(db.Integer, db.ForeignKey('beds.id'))
    count_usage = db.Column(db.Integer)
    standard_usage = db.Column(db.Integer)
    turnover_usage = db.Column(db.Integer)

    def __repr__(self):
        return '<BedProductivity {}>'.format(self.productivity_bed.
                                             current_productivity)