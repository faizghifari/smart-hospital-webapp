# backend/test/test_user_model.py

import unittest
import json
import time

from backend.server import db
from backend.server.models.user import User
from backend.test.base import BaseTestCase

from backend.test.test_auth_api import register_user

class TestUserModel(BaseTestCase):
    
    def test_register_user_basic(self):
        pass
        # with self.client:
        #     response = register_user(self, 'test@mail.com', 'test_username', '123456')
        #     data = json.loads(response.data.decode())
            

                

if __name__ == '__main__':
    unittest.main()