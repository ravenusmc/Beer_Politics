
#This file will create the user object

class User():

  def __init__(self, username, password, hashed):
    self.username = username
    self.password = password
    self.password_hashed = hashed