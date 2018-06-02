from flask_socketio import emit
from random import random
from time import sleep
from threading import Thread, Event

from app import socketio
from . import ministry

thread = Thread()
thread_stop_event = Event()

class RandomNumberGenerator(Thread):
    def __init__(self):
        self.delay = 1
        super(RandomNumberGenerator,self).__init__()
    
    def rng_safety(self):
        while thread_stop_event.isSet():
            safety_num = round(random()*10,3)
            socketio.emit('safety_num', {'safety_num', safety_num}, namespace='/ministry')
            sleep(self.delay)
    
    def rng_security(self):
        while thread_stop_event.isSet():
            security_num = round(random()*10,3)
            socketio.emit('security_num', {'security_num', security_num}, namespace='/ministry')
            sleep(self.delay)
    
    def rng_productivity(self):
        while thread_stop_event.isSet():
            productivity_num = round(random()*10,3)
            socketio.emit('productivity_num', {'productivity_num', productivity_num}, namespace='ministry')
    
    def run(self):
        self.rng_safety()
        self.rng_security()
        self.rng_productivity()
