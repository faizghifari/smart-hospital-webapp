import datetime

from werkzeug.security import generate_password_hash, check_password_hash

from backend.server import app, db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(60), index=True, unique=True, nullable=False)
    username = db.Column(db.String(60), index=True, unique=True, nullable=False)
    password_hash = db.Column(db.Text, nullable=False)
    register_date = db.Column(db.DateTime, nullable=False)
    is_ministry = db.Column(db.Boolean, nullable=False, default=False)
    is_admin = db.Column(db.Boolean, nullable=False, default=False)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))

    def __init__(self, email, username, password, is_ministry, is_admin):
        self.email = email
        self.username = username
        self.password_hash = generate_password_hash(password)
        self.register_date = datetime.datetime.now()
        self.is_ministry = is_ministry
        self.is_admin = is_admin
    
    @property
    def password(self):
        raise AttributeError('Password is protected and not accessible')

    @classmethod
    def find_by_username(cls, username):
        return cls.query.filter_by(username = username).first()
    
    @classmethod
    def find_by_email(cls, email):
        return cls.query.filter_by(email = email).first()

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id = id).first()
    
    def hash_password(self, password):
        return generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def db_commit(self):
        db.session.add(self)
        db.session.commit()
    
    def __repr__(self):
        return '<User: {}>'.format(self.username)