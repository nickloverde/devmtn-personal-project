import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Comment from './Comment'

const Comments = (props) => {

    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')
    
    useEffect(()=> {
        getComments()
    }, [])

    const getComments= ()=> {
        axios
        .get(`/api/comments/${props.articleId}`)
        .then((res) => {
            setComments(res.data)
        })
        .catch(err => console.log(err))
    }

    const addComment = () => {
        axios
        .post(`/api/comments/${props.articleId}`, {newComment: newComment})
        .then (res => {
            getComments()
            setNewComment('')
        })
        .catch(err => alert('Please login to add comments. Thank you.'))
    }
    
    const updateComment = (commentId, updateCommentStr) => {
        axios
        .put(`/api/comments/${commentId}`, {updatedComment: updateCommentStr})
        .then (res => {
            getComments()
        })
        .catch(err => console.log(err))
    }

    const deleteComment = (commentId) => {
        axios
        .delete(`/api/comments/${commentId}`)
        .then (res => {
            getComments()
        })
        .catch(err => console.log(err))
    }


    const mappedComments = comments.map((comment) => {
        console.log(comment)
        return (
        <div>
            <Comment 
            comment = {comment} 
            updateComment = {updateComment}
            deleteComment = {deleteComment}
            key= {comment.comments_id}
            />
            
        </div>
        )
    })

    return (
        <div className='comments'>
            <div className='add-comment'>
                <h5>Please leave your comments here. Remember to be respectful to other subscribers.</h5>
            </div>

            <input
            className='input-comment'
            value={newComment}
            onChange={e => setNewComment(e.target.value)}/>
            <button
            type="reset" value="Reset"
            className='btn-create-account'
            onClick = {addComment}>Add</button>
          {mappedComments}
        </div>
    )
}

export default Comments