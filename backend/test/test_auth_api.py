# backend/test/test_auth_api.py

import json
import unittest
import time
import datetime

from backend.server import db
from backend.server.models.user import User
from backend.server.models.token import RevokedToken
from backend.test.base import BaseTestCase

def register_user(self, email, username, password):
    return self.client.post(
        '/auth/register',
        data=json.dumps(dict(
            email=email,
            username=username,
            password=password,
        )),
        content_type='application/json',
    )

def login_user(self, email, password):
    return self.client.post(
        '/auth/login',
        data = json.dumps(dict(
            email = email,
            password = password
        )),
        content_type='application/json',
    )

class TestAuthAPI(BaseTestCase):

    def test_register_unregistered_user(self):
        with self.client:
            response = register_user(self, 'test@mail.com', 'test_username', 'test_password')
            data = json.loads(response.data.decode())
            self.assertTrue(data['status'] == 'success')
            self.assertTrue(data['message'] == 'User test_username registered successfully')
            self.assertTrue(data['access_token'])
            self.assertTrue(data['refresh_token'])
            self.assertTrue(response.content_type == 'application/json')
            self.assertEqual(response.status_code, 201)
    
    def test_register_registered_email(self):
        user = User(
            email = 'test@mail.com',
            username = 'new_username',
            password = '123456',
            is_ministry = False
        )
        user.db_commit()
        with self.client:
            response = register_user(self, 'test@mail.com', 'test_username', 'test_password')
            data = json.loads(response.data.decode())
            self.assertTrue(data['status'] == 'fail')
            self.assertTrue(data['message'] == 'test@mail.com already used. Please try another.')
            self.assertTrue(response.content_type == 'application/json')
            self.assertEqual(response.status_code, 202)
    
    def test_register_registered_username(self):
        user = User(
            email = 'new@mail.com',
            username = 'test_username',
            password = '123456',
            is_ministry = False
        )
        user.db_commit()
        with self.client:
            response = register_user(self, 'test@mail.com', 'test_username', 'test_password')
            data = json.loads(response.data.decode())
            self.assertTrue(data['status'] == 'fail')
            self.assertTrue(data['message'] == 'test_username already exist. Please try another.')
            self.assertTrue(response.content_type == 'application/json')
            self.assertEqual(response.status_code, 202)
    
    def test_login_registered_user(self):
        with self.client:
            resp_register = register_user(self, 'test@mail.com', 'test_username', 'test_password')
            data_register = json.loads(resp_register.data.decode())
            self.assertTrue(data_register['status'] == 'success')
            self.assertTrue(data_register['message'] == 'User test_username registered successfully')
            self.assertTrue(data_register['access_token'])
            self.assertTrue(data_register['refresh_token'])
            self.assertTrue(resp_register.content_type == 'application/json')
            self.assertEqual(resp_register.status_code, 201)

            resp_login = login_user(self, 'test@mail.com', 'test_password')
            data_login = json.loads(resp_login.data.decode())
            self.assertTrue(data_login['status'] == 'success')
            self.assertTrue(data_login['message'] == 'Logged in as test_username')
            self.assertTrue(data_login['access_token'])
            self.assertTrue(data_login['refresh_token'])
            self.assertTrue(resp_login.content_type == 'application/json')
            self.assertEqual(resp_login.status_code, 200)
    
    def test_login_registered_user_invalid_password(self):
        with self.client:
            resp_register = register_user(self, 'test@mail.com', 'test_username', 'test_password')
            data_register = json.loads(resp_register.data.decode())
            self.assertTrue(data_register['status'] == 'success')
            self.assertTrue(data_register['message'] == 'User test_username registered successfully')
            self.assertTrue(data_register['access_token'])
            self.assertTrue(data_register['refresh_token'])
            self.assertTrue(resp_register.content_type == 'application/json')
            self.assertEqual(resp_register.status_code, 201)

            resp_login = login_user(self, 'test@mail.com', '123456')
            data_login = json.loads(resp_login.data.decode())
            self.assertTrue(data_login['status'] == 'fail')
            self.assertTrue(data_login['message'] == 'Invalid password. Please try again.')
            self.assertTrue(resp_login.content_type == 'application/json')
            self.assertEqual(resp_login.status_code, 401)
    
    def test_login_unregistered_user(self):
        with self.client:
            resp_login = login_user(self, 'test@mail.com', '123456')
            data_login = json.loads(resp_login.data.decode())
            self.assertTrue(data_login['status'] == 'fail')
            self.assertTrue(data_login['message'] == 'User doesn\'t exist. Please register first.')
            self.assertTrue(resp_login.content_type == 'application/json')
            self.assertEqual(resp_login.status_code, 404)
    
    def test_user_status(self):
        with self.client:
            resp_register = register_user(self, 'test@mail.com', 'test_username', 'test_password')
            response = self.client.get(
                '/auth/status',
                headers=dict(
                    Authorization='Bearer ' + json.loads(
                        resp_register.data.decode()
                    )['access_token']
                )
            )
            data = json.loads(response.data.decode())
            self.assertTrue(data['status'] == 'success')
            self.assertTrue(data['data'] is not None)
            self.assertTrue(data['data']['email'] == 'test@mail.com')
            self.assertTrue(data['data']['username'] == 'test_username')
            self.assertTrue(data['data']['register_date'] is not None)
            self.assertTrue(data['data']['is_ministry'] is 'true' or 'false')
            self.assertTrue(response.content_type == 'application/json')
            self.assertEqual(response.status_code, 200)
    
    def test_logout_access_token(self):
        with self.client:
            resp_register = register_user(self, 'test@mail.com', 'test_username', 'test_password')
            response = self.client.post(
                '/auth/logout/token/access',
                headers=dict(
                    Authorization='Bearer ' + json.loads(
                        resp_register.data.decode()
                    )['access_token']
                )
            )
            data = json.loads(response.data.decode())
            self.assertTrue(data['status'] == 'success')
            self.assertTrue(data['message'] == 'Access token revoked successfully')
            self.assertTrue(response.content_type == 'application/json')
            self.assertEqual(response.status_code, 202)
    
    def test_logout_refresh_token(self):
        with self.client:
            resp_register = register_user(self, 'test@mail.com', 'test_username', 'test_password')
            response = self.client.post(
                '/auth/logout/token/refresh',
                headers=dict(
                    Authorization='Bearer ' + json.loads(
                        resp_register.data.decode()
                    )['refresh_token']
                )
            )
            data = json.loads(response.data.decode())
            self.assertTrue(data['status'] == 'success')
            self.assertTrue(data['message'] == 'Refresh token revoked successfully')
            self.assertTrue(response.content_type == 'application/json')
            self.assertEqual(response.status_code, 202)