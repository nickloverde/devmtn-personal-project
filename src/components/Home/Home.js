import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home = (props) => {
    const [articles, setArticles] = useState([])
    const [technology, setTechnology] = useState ([])
    const [dr, setDr] = useState([])

    useEffect(()=> {
        axios
        .get('/api/articles')
        .then((res) => {
            setArticles(res.data)

            //make techArticles into an array of objects where all 
            const techArticles = res.data.filter((article)=>{
                return article.category === 'Technology'
            })
            setTechnology(techArticles)

            let drArticles = res.data.filter((article)=>{
                return article.category === 'Dr'
            })
            // drArticles = drArticles.splice(0, 1)
            setDr(drArticles)

        })

    }, [])

    return (
        <div>
            {articles.map((article) => {
                return (
                    <div>
                        <Link key={article.article_id} to={`/article/${article.article_id}`}>
                            <div>{article.category}</div>
                            <div>{article.headline}</div>
                            <div>{article.summary}</div>
                            <img src={article.image}/>
                        </Link>
                    </div>
                )
            })}

            <div>
                <h1>Tech Articles</h1>
                {technology.map((article) => {
                    return (
                        <div>
                            <Link key={article.article_id} to={`/article/${article.article_id}`}>
                                <div>{article.category}</div>
                                <div>{article.headline}</div>
                                <div>{article.summary}</div>
                                <img src={article.image}/>
                            </Link>
                        </div>
                    )
                })}
            </div>

            <div>
                <h1>Dr Articles</h1>
                {dr.map((article, i) => {
                    let articleCSS = ''
                    if(i === 0){
                        articleCSS = 'toparticle' //need toparticle class in css
                    } else {
                        articleCSS = 'subarticle'
                    }
                    return (
                        <div className = {articleCSS}>
                            <Link key={article.article_id} to={`/article/${article.article_id}`}>
                                <div>{article.category}</div>
                                <div>{article.headline}</div>
                                <div>{article.summary}</div>
                                <img src={article.image}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home