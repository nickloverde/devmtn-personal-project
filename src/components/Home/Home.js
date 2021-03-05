import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import read from './read.png'

const Home = (props) => {
    const [articles, setArticles] = useState([])
    const [technology, setTechnology] = useState ([])
    const [lifeStyle, setLifeStyle] = useState ([])

    useEffect(()=> {
        axios
        .get('/api/articles')
        .then((res) => {
            setArticles(res.data)

            //make techArticles into an array of objects
            let techArticles = res.data.filter((article)=>{
                return article.category === 'Technology'
            })
            setTechnology(techArticles)

            //ms articles
            //make lifeArticles into an array of objects
            let lifeArticles = res.data.filter((article)=>{
                return article.category === 'Lifestyle'
            })
            setLifeStyle(lifeArticles)
        })
        .catch(err => console.log(err))

    }, [])

    return (
        <div>
            {articles.slice(0,1).map((article) => {
                return (
                    <div className='home'>
                        <div className='preview'>
                            <div className='top-stories'>
                            <p>Top Stories</p>
                            </div>

                            <div className='category'><p>{article.category}</p></div>

                            <Link style={{ textDecoration: 'none', color: 'black'}} key={article.article_id} to={`/article/${article.article_id}`}>
                                
                                    <div className='media-preview'>
                                        <div className='headline'><h1>{article.headline}</h1></div>
                                        <div>{article.summary}</div>
                                    </div>

                                    <div>
                                        <img className='img-main'src={article.image}/>
                                    </div>
                            </Link>
                        </div>
                    </div>
                )
            })}

            
            <h1 className = 'title'>Technology</h1>
            <div className='tech-section'>
                {technology.map((article, i) => {
                    let articleCSS = ''
                    if(i < 3){
                        articleCSS = 'toparticle'
                    } else {
                        articleCSS = 'subarticle'
                    }
                    return (
                        <div className = {articleCSS}>
                            <div className='art-preview'>
                                <Link style={{ textDecoration: 'none', color: 'black'}} key={article.article_id} to={`/article/${article.article_id}`}>
                                    <img className= 'img-sub' src={article.image}/>
                                    <div className='category'>{article.category}</div>
                                    <div className='headline'>{article.headline}</div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='banner-container'>
               <img src={read} className='banner-img'/>
            </div>

            <h1 className = 'title'>Lifestyle</h1>

            <div className='tech-section'>
                {lifeStyle.map((article, i) => {
                    let articleCSS = ''
                    if(i < 3){
                        articleCSS = 'toparticle'
                    } else {
                        articleCSS = 'subarticle'
                    }
                    return (
                        <div className = {articleCSS}>
                            <div>
                                <Link style={{ textDecoration: 'none', color: 'black'}} key={article.article_id} to={`/article/${article.article_id}`}>
                                    <img className= 'img-sub' src={article.image}/>
                                    <div className='category'>{article.category}</div>
                                    <div className='headline'>{article.headline}</div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>        
        </div>
    )
}

export default Home