DELETE FROM comments
WHERE comments_id = $1;

SELECT * FROM comments;