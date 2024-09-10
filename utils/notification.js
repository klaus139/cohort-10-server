import nodemailer from "nodemailer"
import { GMAIL_PASS, GMAIL_USER } from "../config/config.js"
import ejs from "ejs"
import {fileURLToPath} from "url"
import {dirname} from "path"
import path from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const transport = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:GMAIL_USER,
        pass:GMAIL_PASS,
    },
    tls:{
        rejectUnauthorized:false
    }

})

export const mailSent1 = async (options) => {
    const {email, subject, template, emailData} = options;

    const templatePath = path.resolve(__dirname, "../mails", template)

    try{
        const html = await ejs.renderFile(templatePath, emailData)

        const mailOptions = {
            from:GMAIL_USER,
            to:email,
            subject,
            html
        }

        await transport.sendMail(mailOptions)
        console.log("email sent successfully", email)

    }catch(error){
        console.log(error)

    }
}