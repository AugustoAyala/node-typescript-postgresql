CREATE DATABASE taskapi;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    status BOOLEAN
);

INSERT INTO tasks (name, status)
    VALUES ('Data design', false),
           ('Authentication', false);
