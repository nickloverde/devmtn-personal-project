import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Comments from '../Comments/Comments'

const Article = (props) => {
    const { article_id } = props.match.params
    const [article, setArticle] = useState({})

    useEffect(() => {
        axios
        .get(`/api/articles/${article_id}`)
        .then((res) => {
            setArticle(res.data)
        })
    }, [])

    return (
        <div>
            <img src = {article.image}/>
            <h1>{article.category}</h1>
            <h2>{article.content}</h2>
        <Comments articleId = {article_id} />
        </div>
    )
}

export default Article

