import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import read from './read.png'

const Home = (props) => {
    const [articles, setArticles] = useState([])
    const [technology, setTechnology] = useState ([])
    const [dr, setDr] = useState([])
    const [ms, setMs] = useState ([])

    useEffect(()=> {
        axios
        .get('/api/articles')
        .then((res) => {
            setArticles(res.data)

            //make techArticles into an array of objects where all 
            let techArticles = res.data.filter((article)=>{
                return article.category === 'Technology'
            })
            setTechnology(techArticles)

            // let drArticles = res.data.filter((article)=>{
            //     return article.category === 'Dr'
            // })
            // // drArticles = drArticles.splice(0, 1)
            // setDr(drArticles)

            //ms articles
            //make techArticles into an array of objects where all 
            let msArticles = res.data.filter((article)=>{
                return article.category === 'Ms'
            })
            setMs(msArticles)


        })

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
                                <div className='art-display'>
                                
                                    <div>
                                    <div className='headline'><h1>{article.headline}</h1></div>
                                    <div>{article.summary}</div>
                                    </div>

                                    <div>
                                    <img className='img-main'src={article.image}/>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    </div>
                )
            })}

            {/* <div>
                <h1>Tech Articles</h1>
                {technology.map((article) => {
                    return (
                        <div>
                            <Link key={article.article_id} to={`/article/${article.article_id}`}>
                                <div className='category'>{article.category}</div>
                                <div><h1>{article.headline}</h1></div>
                                <div>{article.summary}</div>
                                <img src={article.image}/>
                            </Link>
                        </div>
                    )
                })}
            </div> */}
            
            <h1 className = 'title'>Technology</h1>
            <div className='tech-section'>
                {technology.map((article, i) => {
                    let articleCSS = ''
                    if(i === 0){
                        articleCSS = 'toparticle' //need toparticle class in css
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
                                    <div>{article.summary}</div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>

            <h1 className = 'title'>Ms</h1>
            <div className='tech-section'>
                {ms.slice(0,3).map((article, i) => {
                    let articleCSS = ''
                    if(i < 3){
                        articleCSS = 'toparticle' //need toparticle class in css
                    } else {
                        articleCSS = 'subarticle'
                    }
                    return (
                        <div className = {articleCSS}>
                            <div>
                                <Link style={{ textDecoration: 'none', color: 'black'}} key={article.article_id} to={`/article/${article.article_id}`}>
                                    <img className= 'img-sub' src={article.image}/>
                                    <div className='category'>{article.category}</div>
                                    <div>{article.headline}</div>
                                    <div>{article.summary}</div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div>
               <img src={read} className='banner-img'/>
            </div>
        </div>
    )
}

export default Home