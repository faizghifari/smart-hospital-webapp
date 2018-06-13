from flask import make_response, jsonify
from flask_restful import Resource, Api, reqparse
from flask_jwt_extended import (create_access_token, 
                                create_refresh_token, 
                                jwt_required, 
                                jwt_refresh_token_required, 
                                get_jwt_identity, 
                                get_raw_jwt)

parser = reqparse.RequestParser()
parser.add_argument('password', required=True, help='Password cannot be blank')
parser.add_argument('email', required=True, help='Email cannot be blank')

register_parser = parser.copy()
register_parser.add_argument('username', required=True, help='Username cannot be blank')

from . import auth
from backend.server.models.user import User
from backend.server.models.token import RevokedToken

api = Api(auth)

class RegisterAPI(Resource):
    def post(self):
        data = register_parser.parse_args()

        is_email_exist = User.find_by_email(data['email'])
        is_username_exist = User.find_by_username(data['username'])
        if (not is_email_exist) and (not is_username_exist):
            try:
                is_ministry = False
                is_admin = False
                # add to handle is_ministry, is_admin and role_id
                user = User(
                    email = data['email'],
                    username = data['username'],
                    password = data['password'],
                    is_ministry = is_ministry,
                    is_admin = is_admin
                )

                user.db_commit()

                access_token = create_access_token(identity = data['username'])
                refresh_token = create_refresh_token(identity = data['username'])

                responseObject = {
                    'status': 'success',
                    'message': 'User {} registered successfully'.
                                format(data['username']),
                    'access_token': access_token,
                    'refresh_token': refresh_token
                }
                return make_response(jsonify(responseObject), 201)
            except Exception as e:
                print(e)
                responseObject = {
                    'status': 'fail',
                    'message': 'Some error occurred. Please try again.'
                }
                return make_response(jsonify(responseObject), 500)
        elif is_username_exist:
            responseObject = {
                'status': 'fail',
                'message': '{} already exist. Please try another.'.
                            format(data['username'])
            }
            return make_response(jsonify(responseObject), 202)
        else:
            responseObject = {
                'status': 'fail',
                'message': '{} already used. Please try another.'.
                            format(data['email'])
            }
            return make_response(jsonify(responseObject), 202)

class LoginAPI(Resource):
    def post(self):
        data = parser.parse_args()
        try:
            user = User.find_by_email(data['email'])
            if user and user.verify_password(data['password']):
                access_token = create_access_token(identity = user.username)
                refresh_token = create_refresh_token(identity = user.username)
                responseObject = {
                    'status': 'success',
                    'message': 'Logged in as {}'.format(user.username),
                    'access_token': access_token,
                    'refresh_token': refresh_token
                }
                return make_response(jsonify(responseObject), 200)
            elif user:
                responseObject = {
                    'status': 'fail',
                    'message': 'Invalid password. Please try again.'
                }
                return make_response(jsonify(responseObject), 401)
            else:
                responseObject = {
                    'status': 'fail',
                    'message': 'User doesn\'t exist. Please register first.'
                }
                return make_response(jsonify(responseObject), 404)
        except Exception as e:
            print(e)
            responseObject = {
                'status': 'fail',
                'message': 'Some error occurred. Please try again.'
            }
            return make_response(jsonify(responseObject), 500)

class LogoutAccessTokenAPI(Resource):
    @jwt_required
    def post(self):
        jti = get_raw_jwt()['jti']
        try:
            revoked_access_token = RevokedToken(jti = jti)
            revoked_access_token.db_commit()
            responseObject = {
                'status': 'success',
                'message': 'Access token revoked successfully'
            }
            return make_response(jsonify(responseObject), 202)
        except Exception as e:
            print(e)
            responseObject = {
                'status': 'fail',
                'message': 'Some error occurred. Please try again.'
            }
            return make_response(jsonify(responseObject), 500)

class LogoutRefreshTokenAPI(Resource):
    @jwt_refresh_token_required
    def post(self):
        jti = get_raw_jwt()['jti']
        try:
            revoked_refresh_token = RevokedToken(jti)
            revoked_refresh_token.db_commit()
            responseObject = {
                'status': 'success',
                'message': 'Refresh token revoked successfully'
            }
            return make_response(jsonify(responseObject), 202)
        except Exception as e:
            print(e)
            responseObject = {
                'status': 'fail',
                'message': 'Some error occurred. Please try again.'
            }
            return make_response(jsonify(responseObject), 500)

class UserStatusAPI(Resource):
    @jwt_required
    def get(self):
        username = get_jwt_identity()
        user = User.find_by_username(username)
        if (user):
            # add to handle is_ministry and role_id
            responseObject = {
                'status': 'success',
                'data': {
                    'email': user.email,
                    'username': user.username,
                    'register_date': user.register_date,
                    'is_ministry': user.is_ministry
                }
            }
            return make_response(jsonify(responseObject), 200)
        else:
            responseObject = {
                'status': 'fail',
                'message': 'Invalid token. Please try another.'
            }
            return make_response(jsonify(responseObject), 401)

class TokenRefreshAPI(Resource):
    @jwt_refresh_token_required
    def post(self):
        try:
            current_user = get_jwt_identity()
            access_token = create_access_token(identity = current_user)
            responseObject = {
                'status': 'success',
                'message': 'Token refreshed successfully',
                'access_token': access_token
            }
            return make_response(jsonify(responseObject), 202)
        except Exception as e:
            print(e)
            responseObject = {
                'status': 'fail',
                'message': 'Some error occurred. Please try again.'
            }
            return make_response(jsonify(responseObject), 500)

api.add_resource(RegisterAPI, '/auth/register')
api.add_resource(LoginAPI, '/auth/login')
api.add_resource(LogoutAccessTokenAPI, '/auth/logout/token/access')
api.add_resource(LogoutRefreshTokenAPI, '/auth/logout/token/refresh')
api.add_resource(UserStatusAPI, '/auth/status')
api.add_resource(TokenRefreshAPI, '/auth/token/refresh')