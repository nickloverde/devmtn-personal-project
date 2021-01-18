import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'

const Comment = (props) => {
    const {comment} = props
    const [body, setBody] = useState('')
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div>
            <h3>{comment.author_id}</h3>
            <p>{comment.body}</p>

        <div>
            
            <p>{!editToggle}</p>

            ?

            <input
            value={body}
            onChange={e => setBody(e.target.value)}/>

            <button
            onClick = {() => props.updateComment(comment.comments_id, body)}>Update
            </button>
            :
            <p>{body}</p>
        </div>

        <button
        onClick = {() => props.deleteComment(comment.comments_id)}>Delete</button>
        </div>
    )
}

export default withRouter(Comment)

