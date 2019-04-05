DROP DATABASE IF EXISTS liteweight_fitness_tracker;

CREATE DATABASE IF NOT EXISTS liteweight_fitness_tracker;

USE liteweight_fitness_tracker;

DROP TABLE IF EXISTS contact_info;

CREATE TABLE contact_info (
	contactID	INT(11) NOT NULL AUTO_INCREMENT,
    email		VARCHAR(120) NULL,
    topic		VARCHAR(45) NULL,
    message		VARCHAR(300) NULL,
    CONSTRAINT 	contact_info_pk PRIMARY KEY(contactID)
);

DROP TABLE IF EXISTS invite_friend;

CREATE TABLE invite_friend (
	invite_friendID INT(11) NOT NULL AUTO_INCREMENT,
    email		VARCHAR(120) NULL,
    message		VARCHAR(300) NULL,
    CONSTRAINT 	invite_friend_pk PRIMARY KEY(invite_friendID)
);

DROP TABLE IF EXISTS customer_metrics;



CREATE TABLE customer_metrics (
	metric_ID 		INT(11) NOT NULL AUTO_INCREMENT,
    weight			INT NULL,
    calorie_intake		CHAR,
	calories_burned	INT,
    workout_type	VARCHAR(30) NULL,
    length_workout	INT,
    hours_slept		INT,
    CONSTRAINT 	customer_metrics_pk PRIMARY KEY(metric_ID)
);

CREATE TABLE user_login (
	
    user_name	VARCHAR(30) NOT NULL 	PRIMARY KEY ,
    user_password	VARCHAR(20) not NULL
);

SELECT * FROM user_login;
SELECT * FROM customer_metrics;
SELECT * FROM invite_friend;
SELECT * FROM contact_info;


CREATE TABLE newuser (
    username        VARCHAR(100) NOT NULL,
   password        VARCHAR(100) NOT NULL,
   confirmpassword VARCHAR(100) NULL
);

INSERT INTO user_login
 VALUES (
	'ira@gmail.com', 'aaabbb'
	);
SELECT user_name, user_password
FROM user_login
WHERE user_name = 'ira@gmail.com';
select * from user_login;