import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Comments from '../Comments/Comments'

const Article = (props) => {
    const { article_id } = props.match.params
    const [article, setArticle] = useState({})
    const [newComment, setNewComment] = useState('')

    useEffect(() => {
        axios
        .get(`/api/articles/${article_id}`)
        .then((res) => {
            setArticle(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <div className='article-top-bar'>
                <div className='article-category'>
                    <h2>{article.category}</h2>
                </div>

                <div className='article-top-data'>
                    <h5 className='article-subhead'>{article.subhead}</h5>
                    <h1>{article.headline}</h1>
                    <h2>{article.summary}</h2>
                </div>

            </div>
            <div className='article-img-container'>
                <img className='article-img' src = {article.image}/>
            </div>

            <div className='article-content'>
            <p>{article.content}</p>
            </div>

        <Comments articleId = {article_id} />
        
        </div>
    )
}

export default Article

