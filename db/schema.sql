DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;
USE notes_db;

-- Create the quotes table
CREATE TABLE notes
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (255) NOT NULL,
  note TEXT NOT NULL,
  PRIMARY KEY(id)
);
