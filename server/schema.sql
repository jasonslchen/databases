DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
Id INT UNSIGNED NOT NULL AUTO_INCREMENT,
username CHAR(50) NOT NULL UNIQUE,
PRIMARY KEY (Id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  Id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  message CHAR(140) NOT NULL,
  roomname CHAR(30) NOT NULL,
  userFK INT UNSIGNED NOT NULL REFERENCES users(Id),
  PRIMARY KEY(Id)
);

INSERT INTO users VALUES (NULL, 'Wesley Wen');

SELECT @last := LAST_INSERT_ID();

INSERT INTO messages VALUES
(NULL, 'firstmessagecheck', 'room1', @last),
(NULL, 'secondMessageCheck', 'room1', @last),
(NULL, 'thirdMessageCheck', 'room1', @last);

INSERT INTO users VALUES (NULL, 'Jason Chen');

SELECT @last := LAST_INSERT_ID();

INSERT INTO messages VALUES
(NULL, 'Hello1', 'room2', @last),
(NULL, 'Hello2', 'room2', @last),
(NULL, 'Hello3', 'room2', @last);

INSERT INTO users VALUES (NULL, 'Mr Balls');

SELECT @last := LAST_INSERT_ID();

INSERT INTO messages VALUES
(NULL, 'Goodbye1', 'room3', @last),
(NULL, 'Goodbye2', 'room3', @last),
(NULL, 'Goodbye3', 'room3', @last);





/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

