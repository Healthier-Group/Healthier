const nodemailer = require("nodemailer");
const {GMAIL_APP_EMAIL, GMAIL_APP_PASSWORD} = process.env

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: GMAIL_APP_EMAIL,
        pass: GMAIL_APP_PASSWORD,
    },
    debug:false,
    tls: {
        rejectUnauthorized: false
    } 
})
module.exports = { transporter };