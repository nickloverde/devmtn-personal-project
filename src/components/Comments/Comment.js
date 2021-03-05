import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'

const Comment = (props) => {
    const {comment} = props
    const [body, setBody] = useState('')

    return (
        <div className='comment'>
            <div className='comment-author'>
                <h5>{comment.first_name, comment.last_name}</h5>
            </div>

            <div className='comment-update'>
                <div className='comment-author'>
                    <p>{comment.body}</p>
                </div>


                <div>
                <input
                value={body}
                onChange={e => setBody(e.target.value)}/>
                <button
                className="btn-create-account"
                onClick = {() => props.updateComment(comment.comments_id, body)}>Update
                </button>


                <button
                className="btn-create-account"
                onClick = {() => props.deleteComment(comment.comments_id)}>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default withRouter(Comment)

