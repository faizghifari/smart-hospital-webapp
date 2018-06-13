# backend/server/config.py

import os
basedir = os.path.abspath(os.path.dirname(__file__))
postgres_local_base = 'postgresql://faizghifari:wirasari29@localhost/'
database_name = 'smart-hospital'


class BaseConfig:
    SECRET_KEY = os.getenv('SECRET_KEY', 'the_lazy_fox')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'crazy_dog')
    JWT_BLACKLIST_ENABLED = True
    JWT_BLACKLIST_TOKEN_CHECKS = ['access', 'refresh']
    DEBUG = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(BaseConfig):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = postgres_local_base + database_name


class TestingConfig(BaseConfig):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = postgres_local_base + database_name + '-test'
    PRESERVE_CONTEXT_ON_EXCEPTION = False


class ProductionConfig(BaseConfig):
    SECRET_KEY = 'the_lazy_fox'
    JWT_SECRET_KEY = 'crazy_dog'
    DEBUG = False
    SQLALCHEMY_DATABASE_URI = 'postgresql:///example'
