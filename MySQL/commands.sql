--This file is for my records and contains all of the MySQL commands that I ran 
--for this project. 

--Creating the database
create database beer_politics;

--Creating the table
CREATE TABLE users (
    user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(255) NOT NULL
);

--Showing the table 
Describe users;

--Droping table 
DROP TABLE users;