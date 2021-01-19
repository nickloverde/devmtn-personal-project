require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const path = require('path')
const authCtrl = require('./controllers/authController')
const comCtrl = require('./controllers/comController')
const artCtrl = require('./controllers/artController')
const nodeCtrl = require('./controllers/nodeController')
 

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

//get info from the client side - access to req.body and json data
app.use(express.json())

//auth endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth', authCtrl.getSubscriber)

//comments endpoints
app.get('/api/comments/:article_id', comCtrl.getAllCommentsFromArticle)
app.post('/api/comments/:article_id', comCtrl.createComment)
app.put('/api/comments/:comment_id', comCtrl.updateComment)
app.delete('/api/comments/:comment_id', comCtrl.deleteComment)

//article endpoints
app.get('/api/articles', artCtrl.displayArticles)
app.get('/api/articles/:article_id', artCtrl.getSpecificArticle)

//nodemailer endpoints
app.post('/send', nodeCtrl.mailer)

// //static folder
app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../build/index.html'))
})


//connecting massive and setting up server port
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    },
}).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('DB Ready')
    app.listen(SERVER_PORT, () => console.log(`Server ready on port ${SERVER_PORT}`))
})