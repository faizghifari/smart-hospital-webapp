class Config(object):
    DEBUG = False
    TESTING = False
    THREADS_PER_PAGE = 2
    CSRF_ENABLED     = True

class DevelopmentConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'mysql://faizghifari:F41zGH01!@localhost/smart_hospital_test'

class ProductionConfig(Config):
    SQLALCHEMY_DATABASE_URI = 'mysql://administrator:admin@localhost/smart_hospital'

config_type = {
    'development': DevelopmentConfig,
    'production': ProductionConfig
}


