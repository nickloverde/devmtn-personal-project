DROP TABLE IF EXISTS subscriber;
DROP TABLE IF EXISTS authSubscriber;
DROP TABLE IF EXISTS plans;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS articles;

CREATE TABLE subscriber (
subscriber_id SERIAL PRIMARY KEY,
first_name VARCHAR (80),
last_name VARCHAR(150),
email VARCHAR (200) UNIQUE NOT NULL,
plan VARCHAR (200),
plan_expiration DATE
);

CREATE TABLE authSubscriber (
auth_id SERIAL PRIMARY KEY,
subscriber_id INT UNIQUE REFERENCES subscriber(subscriber_id),
hash TEXT
);

CREATE TABLE plans (
plan_id SERIAL PRIMARY KEY,
subscriber_id INT UNIQUE REFERENCES subscriber(subscriber_id),
name VARCHAR(300),
description VARCHAR(300),
price INT
);

CREATE TABLE article (
article_id SERIAL PRIMARY KEY,
category VARCHAR (300),
headline VARCHAR (300),
subhead VARCHAR (300),
summary TEXT,
content TEXT,
image TEXT,
posting_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE comments (
comments_id SERIAL PRIMARY KEY,
author_id INT REFERENCES subscriber(subscriber_id),
article_id INT REFERENCES article(article_id),
body VARCHAR (1000),
posting_date DATE NOT NULL DEFAULT CURRENT_DATE
);

SELECT * 
FROM authSubscriber
JOIN subscriber ON subscriber.subscriber_id = authSubscriber.auth_id;

SELECT *
FROM plans
JOIN subscriber ON subscriber.subscriber_id = plans.subscriber_id;

SELECT *
FROM comments
JOIN article ON article.article_id = comments.article_id;

SELECT *
FROM comments
JOIN subscriber ON subscriber.subscriber_id = comments.author_id
WHERE comments.article_id = $1;