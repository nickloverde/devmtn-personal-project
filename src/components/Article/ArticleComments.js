import axios from 'axios'
import React, {useState} from 'react'

const ArticleComments = (props) => {

    const [newComment, setNewComment] = useState('')

    return (
        <div>
            <input
            value={newComment}
            onChange={e => setNewComment(e.target.value)}/>
            <button
            onClick = {props.addComment}>Add</button>
        </div>
    )
}

export default ArticleComments
