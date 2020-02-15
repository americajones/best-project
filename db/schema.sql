DROP DATABASE IF EXISTS media_db;

CREATE DATABASE media_db;

USE media_db;

CREATE TABLE books (
id INT NOT NULL AUTO_INCREMENT,
book_title VARCHAR(225) NOT NULL,
book_author VARCHAR(200),
book_review TEXT NOT NULL,
book_genre VARCHAR(75),
isbn VARCHAR(20),
PRIMARY KEY (id)
);

CREATE TABLE movies (
id INT NOT NULL AUTO_INCREMENT,
movie_title VARCHAR(225) NOT NULL,
movie_category VARCHAR(75),
movie_review TEXT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE podcasts (
id INT NOT NULL AUTO_INCREMENT,
podcast_name VARCHAR(100) NOT NULL,
podcast_review TEXT NOT NULL,
PRIMARY KEY (id)
);
