#importing outside libraries for use in the project
from flask import Flask, session, jsonify, redirect, url_for, escape, render_template, request, flash

#Setting up Flask
app = Flask(__name__)

#Bringing in files that I created for this project
from data import *
from database import * 
from user import *



#This route takes the user to the home page
@app.route('/')
def landing():
    home = True
    return render_template('index.html', home = home)

#This route will take the user to the login page
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        #Recieving the information from the user.
        username = request.form['username']
        password = request.form['password']
        print(username)
        print(password)
        #creating the db connection object
        db = Connection()
        #Checking to see if the user is in the database.
        flag, not_found, password_no_match = db.check(username, password)
        print(flag)
        #Conditional statement to test if the user is a member of the site.
        if flag == True:
            #If the user is in the database, the user gets sent to the index page.
            session['username'] = request.form['username']
            #Sending the user to the index page
            return redirect(url_for('home'))
        else:
            #If the user is not in the database then they will be sent to the
            #sign up page.
            if not_found:
                flash('Username not found, maybe sign up!')
            elif password_no_match:
                flash('Password does not match! Maybe sign up!')
    home = True
    return render_template('login.html', home = home)

#This route takes the user to the sign up page
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        #Pulling data from the form on the signup page
        username = request.form['username']
        password = request.form['password']
        password2 = request.form['password2']
        if password != password2:
            flash('Passwords Do Not Match!')
        else: 
            #creating the db object to interact with the db. 
            db = Connection()
            #Encrypting the password
            password, hashed = db.encrypt_pass(password)
            #creating user object 
            user = User(username, password, hashed)
            #Adding the user to the database
            db.insert(user)
            #Once the information is added to the db, the user is redirected to login page.
            return redirect(url_for('login'))
    home = True
    return render_template('signup.html', home = home)

#This route takes the user to the home page once they are signed in 
@app.route('/home')
def home():
    if 'username' not in session:
        return redirect(url_for('signup'))
    allowed_in = True 
    return render_template('home.html', allowed_in = allowed_in)

#This route will take the user to the data page 
@app.route('/data')
def data():
    if 'username' not in session:
        return redirect(url_for('signup'))
    allowed_in = True
    data = Data()
    correlation_list = data.get_correlations()
    return render_template('data.html', allowed_in = allowed_in, correlation_list = correlation_list)


#This route will take the user to the edit page so that they can edit their profil  
@app.route('/edit', methods=['GET', 'POST'])
def edit():
    if 'username' not in session:
        return redirect(url_for('signup'))
    else: 
        #Pulling the username which I'll use in the database. 
        username_original = session['username']
        #This variable will ensure that the navbar is set up for a 
        #logged in user. 
        allowed_in = True 
        #Creating a connection to the database 
        db = Connection()
        #Pulling the user information out of the database. 
        user = db.pull_user_info(username_original)
        if request.method == 'POST':
            username = request.form['username']
            db.update(username_original, username)
            return redirect(url_for('edit'))
        return render_template('edit.html', allowed_in = allowed_in, username = username_original)

#This route will sign out the user 
@app.route('/sign_out')
def logout():
    # remove the username from the session if it's there
    session.pop('username', None)
    #Redirect to Landing page
    return redirect(url_for('landing'))

# set the secret key. keep this really secret:
app.secret_key = 'n3A\xef(\xb0Cf^\xda\xf7\x97\xb1x\x8e\x94\xd5r\xe0\x11\x88\x1b\xb9'

#This line will actually run the app.
if __name__ == '__main__':
    app.run(debug=True)