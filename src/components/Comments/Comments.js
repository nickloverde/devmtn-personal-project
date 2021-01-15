import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Comment from './Comment'

const Comments = (props) => {

    const [comments, setComments] = useState([])
    
    useEffect(()=> {
        axios
        .get(`/api/comments/${props.articleId}`)
        .then((res) => {
            setComments(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const mappedComments = comments.map((comment) => {
        return (
        <div>
            <Comment commentId= {comment.comments_id}/>
        </div>
        )
    })

    return (
        <div>
          {mappedComments}
        </div>
    )
}

export default Comments