from backend.server import db

class RevokedToken(db.Model):
    __tablename__ = 'revoked_tokens'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    jti = db.Column(db.String(120), nullable=False)

    def __init__(self, jti):
        self.jti = jti

    @classmethod
    def is_token_revoked(cls, jti):
        query = cls.query.filter_by(jti = jti).first()
        return bool(query)
    
    def db_commit(self):
        db.session.add(self)
        db.session.commit()