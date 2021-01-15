const nodemailer = require('nodemailer')

module.exports = {
    mailer: (req, res) => {

        const {email} = req.body

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
            subject: 'Thank you for subscribing to the Economist Clone Newsletter',
            text: 'It works'
        }

        //send email with defined transport object
        transporter.sendMail(mailOptions, (err, data)=> {
            if(err){
                console.log('Error occurs')
                res.status(500).send(err)
            } else {
                console.log('Email sent')
                res.status(200).send(data)
            }
        })
    }
}