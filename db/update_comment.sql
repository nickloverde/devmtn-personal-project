UPDATE comments 
SET body = $1
WHERE comments_id = $2;

SELECT * FROM comments;
