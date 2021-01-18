module.exports = {
    getAllCommentsFromArticle: async (req, res) => {

        //get the database
        const db = req.app.get('db')

        //reference the article id on params
        const {article_id} = req.params

        //get the comments from the database
        const comments = await db.get_comments_on_article([article_id])

        //return the comments
        res.status(200).send(comments)
    },
    createComment: async (req, res)=> {

        //get the database
        const db = req.app.get('db')

        // //Check subscriber logged in (use .catch in axios to tell user to subscribe)
        // if (!req.session.subscriber){
        //     return res.status(403).send('Please login to comment')
        // }

        //destructure newComment from the body
        const { newComment } = req.body

        //insert newComment into comments table
        const comments = await db.insert_comments([6, req.params.article_id, newComment])
        
       //display new comment with all the comments
        res.status(200).send(comments)
    },
    updateComment: async (req, res)=> {

        //get the database
        const db = req.app.get('db')

        //check subscriber logged in (use .catch in axios to tell user to subscribe)
        // if (!req.session.subscriber){
        //     return res.status(403).send('Please login to edit comments')
        // }

        //destructure comment id from params
        const {comment_id} = req.params

        //destructure updatedComment from the body
        const {updatedComment} = req.body

        //insert newComment into comments table
        const comments = await db.update_comment([updatedComment, comment_id])

        //return all of the comments
        res.status(200).send(comments)
    },
    deleteComment: (req, res)=>{

        //get the database
        const db = req.app.get('db')

        //reference the comment id taken of the params
        const {comment_id} = req.params

        //delete the comment in the database
        const comments = db.delete_comment([comment_id])

        //return all of the comments
        res.status(200).send(comments)
    }
}