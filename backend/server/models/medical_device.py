from backend.server import db

class MedicalDevice(db.Model):
    __tablename__ = 'medical_devices'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    device_name = db.Column(db.String(60), nullable=False)
    device_desc = db.Column(db.String(120))
    device_loc = db.Column(db.String(60)) # refer to a place (room, level, or building)
    device_pic = db.Column(db.String(60)) # refer to staff/person/etc.
    device_status = db.Column(db.Boolean) # refer to (used, unused, etc.) need to list more
    production_date = db.Column(db.DateTime)
    is_on = db.Column(db.Boolean)
    current_safety = db.Column(db.Integer)
    current_security = db.Column(db.Integer)
    current_productivity = db.Column(db.Integer)
    device_type_id = db.Column(db.Integer, db.ForeignKey('medical_devices_type.id'))
    device_history = db.relationship('MedicalDeviceHistory',
                                       backref='history_device',
                                       lazy='dynamic')
    device_safety = db.relationship('MedicalDeviceSafety',
                                      backref='safety_device',
                                      lazy='dynamic')
    device_security = db.relationship('MedicalDeviceSecurity',
                                        backref='security_device',
                                        lazy='dynamic')
    device_productivity = db.relationship('MedicalDeviceProductivity',
                                          backref='productivity_device',
                                          lazy='dynamic')

    def __repr__(self):
        return '<Device {}>'.format(self.device_name)

class MedicalDeviceHistory(db.Model):
    __tablename__ = 'medical_devices_history'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    device_id = db.Column(db.Integer, db.ForeignKey('medical_devices.id'))
    date_time = db.Column(db.DateTime)
    record_safety = db.Column(db.Integer)
    record_security = db.Column(db.Integer)
    record_productivity = db.Column(db.Integer)

    def __repr__(self):
        return '<DeviceHistory {}>'.format(self.history_device.device_name)
    
class MedicalDeviceType(db.Model):
    __tablename__ = 'medical_devices_type'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    type_name = db.Column(db.String(120))
    type_desc = db.Column(db.String(240))
    devices = db.relationship('MedicalDevice',
                               backref='device_type',
                               lazy='dynamic')

class MedicalDeviceSafety(db.Model):
    __tablename__ = 'medical_devices_safety'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    device_id = db.Column(db.Integer, db.ForeignKey('medical_devices.id'))
    device_age = db.Column(db.Integer)
    last_maintenance_date = db.Column(db.DateTime)
    standar_maintenance = db.Column(db.Integer)
    is_reported = db.Column(db.Boolean)

    def __repr__(self):
        return '<DeviceSafety {}>'.format(self.safety_device.current_safety)

class MedicalDeviceSecurity(db.Model):
    __tablename__ = 'medical_devices_security'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    device_id = db.Column(db.Integer, db.ForeignKey('medical_devices.id'))
    current_loc = db.Column(db.String(60)) # refer to a place
    current_pic = db.Column(db.String(60)) # refer to a staff

    def __repr__(self):
        return '<DeviceSecurity {}>'.format(self.security_device.
                                            current_security)

class MedicalDeviceProductivity(db.Model):
    __tablename__ = 'medical_devices_productivity'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    device_id = db.Column(db.Integer, db.ForeignKey('medical_devices.id'))
    count_usage = db.Column(db.Integer)
    standard_usage = db.Column(db.Integer)

    def __repr__(self):
        return '<DeviceProductivity {}>'.format(self.productivity_device.
                                                current_productivity)
