SELECT *
FROM comments
JOIN subscriber ON subscriber.subscriber_id = comments.author_id
WHERE comments.article_id = $1;