INSERT INTO comments (author_id, article_id, body)
VALUES ($1, $2, $3);

SELECT * FROM comments;