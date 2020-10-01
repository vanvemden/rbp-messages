DROP DATABASE IF EXISTS "messages";

CREATE DATABASE "messages";

\c "messages"

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL
);


INSERT INTO posts
  (text)
VALUES
  ('Everyone loves posting first. I win!'),
  ('Oh well. Didn''t get to be first.');
