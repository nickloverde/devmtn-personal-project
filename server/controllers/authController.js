const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

module.exports = {
    //auth methods
    register: async (req, res) => {
    
        //get the database
        const db = req.app.get('db')

        //destructure info (email, password, first_name, last_name) from the body
        const { first_name, last_name, email, password } = req.body

        //check if subscriber exists using email, reject if it exists
        const [existingSubscriber] = await db.subscriber.find({ email })

        if (existingSubscriber) {
            return res.status(409).send('Subscriber already exists')
        }

        //generate salt
        const salt = bcrypt.genSaltSync(10)

        //generate hash
        const hash = bcrypt.hashSync(password, salt)

        //insert subscriber
        const newSubscriber = await db.subscriber.insert({ first_name, last_name, email})

        //insert hash
        await db.authsubscriber.insert({ subscriber_id: newSubscriber.subscriber_id, hash})

        //set subscriber on session
        req.session.subscriber = newSubscriber

        //send email
        const {EMAIL, PASSWORD} = process.env

        //Create transporter for nodemailer
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        })

        //Create mail options
        let mailOptions = {
            from: 'nick.loverde@gmail.com',
            to: email,
            subject: 'Thank you for subscribing to the Economist Clone',
            text: 'Welcome to your Economist subscription. As a subscriber you have full access to all of the Economist articles including our decades-long archives. If you have any questions please contact us. Thank you.'
        }

        //send email with defined transport object
        transporter.sendMail(mailOptions, (err, data)=> {
            if(err){
                console.log('Error occurs')
                // res.status(500).send(err)
            } else {
                console.log('Email sent')
                // res.status(200).send(data)
            }
        })

        //send confirmation
        res.status(200).send(req.session.subscriber)
    },
    login: async (req, res) => {
        
        //get the database
        const db = req.app.get('db')

        //destructure email and password from subscriber input
        const { email, password } = req.body

        //check if subscriber already exists with email
        const [existingSubscriber] = await db.subscriber.find({ email })

        if (!existingSubscriber) {
            return res.status(404).send('Subscriber not found')
        }

        //get user info
        const [authSubscriber] = await db.authsubscriber.find({ subscriber_id: existingSubscriber.subscriber_id})

        //check hash against password
        const isAuthenticated = bcrypt.compareSync(password, authSubscriber.hash)

        //if mismatched password, reject
        if(!isAuthenticated){
            return res.status(403).send('Incorrect password. Please try again.')
        }

        //set subscriber on session
        req.session.subscriber = existingSubscriber

        //send confirmation
        res.status(200).send(req.session.subscriber)
    },
    logout: (req, res) => {

        //terminate session
        req.session.destroy()

        //send confirmation
        res.sendStatus(200)
    },
    getSubscriber: (req, res) => {

        //Look for subscriber's session and report back if can't be found
        if (req.session.subscriber) {
            res.status(200).send(req.session.subscriber)
        } else {
            res.status(404).send('Subscriber not found')
        }
    }
}