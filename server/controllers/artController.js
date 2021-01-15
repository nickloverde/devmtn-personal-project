module.exports = {
    //article methods
    displayArticles: async (req, res)=>{
        
    //get database
    const db = req.app.get('db')

    //reference articles in database
    const articles = await db.get_articles()

    console.log(articles)

    //return all the articles
    res.status(200).send(articles)
    },
    getSpecificArticle: async (req, res) => {
        //get database
        const db = req.app.get('db')

        //req params article id
        const { article_id } = req.params

        //reference the article from the db
        const [article] = await db.get_specific_article(article_id)

        //returning the article 
        res.status(200).send(article)
    },
    getArticlesByCategory: async (req, res) => {
        //get database
        const db = req.app.get('db')

        //req.params category
        const {category} = req.params

        //reference the articles in the category
        const articles = await db.get_articles_by_category([category])

        //return articles in category
        res.status(200).send(articles)
    }
}