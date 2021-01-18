INSERT INTO comments (author_id, article_id, body)
VALUES ($1, $2, $3);

SELECT *
FROM comments
JOIN subscriber ON subscriber.subscriber_id = comments.author_id
WHERE comments.article_id = $2;

