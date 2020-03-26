DROP DATABASE IF EXISTS gfrcbu09bx8xal7z;

CREATE DATABASE gfrcbu09bx8xal7z;

USE gfrcbu09bx8xal7z;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);