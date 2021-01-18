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
        })
    }
    
    const updateComment = (commentId, updateCommentStr) => {
        axios
        .put(`/api/comments/${commentId}`, {updatedComment: updateCommentStr})
        .then (res => {
            getComments()
        })
    }

    const deleteComment = (commentId) => {
        axios
        .delete(`/api/comments/${commentId}`)
        .then (res => {
            getComments()
        })
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
        <div>
            <input
            value={newComment}
            onChange={e => setNewComment(e.target.value)}/>
            <button
            onClick = {addComment}>Add</button>
          {mappedComments}
        </div>
    )
}

export default Comments