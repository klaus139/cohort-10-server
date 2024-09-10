import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import {dirname} from "path"
import ejs from "ejs"
import { mailSent1 } from "../utils/notification.js";
import {fileURLToPath} from "url"
import { createActivationToken } from "../utils/token.js";
import path from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)



export const createUser = async(req, res) => {
    try{
        //validate the user input
        const {username, email, password} = req.body;//desctructuring 
        if(!username || !email || !password){
            return res.status(400).json({
                message:"Please fill all the fields"
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(500).json({
                message:"Invalid email"
            })
        }
        //check for existing user
        const userExists = await User.findOne({email})
        if(userExists){
            res.status(400).json({
                message:"Email already registered, login instead"
            })
        }
        // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        // if (!passwordRegex.test(password)) {
        //     res.status(400).json({
        //         message:"Password must contain at least 6 characters, one uppercase letter, one lowercase letter, one number, and one special character."
        // });
        // }

        //TODO HASH PASSWORD
        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const {token, activationCode} = createActivationToken({username, email, password:hashedPassword});

        const emailData = {user:{username}, activationCode}
        const templatePath = path.join(__dirname, "../mails/activation-mail.ejs")

        try{
            const html = await ejs.renderFile(templatePath, emailData);

            await User.create({
                username,
                email,
                password:hashedPassword,
                
            });


            await mailSent1({
                email,
                subject:"Email Verification",
                template:"activation-mail.ejs",
                emailData
            });

            res.status(200).json({
                status:"success",
                message:`Please check your email ${email} to verify your acount`,
                activationToken:token,
                activationCode
            })
        }catch(error){
            console.log(error)
                return res.status(500).json({
                    message:"error sending email"
                })

        }

        // const newUser = User({username, email, password:hashedPassword});

        // try{
        //     await newUser.save();
        //     //create a token
            
        //     res.status(201).json({
        //         message: "User created successfully",
        //         user: newUser
        //     })
        // }catch(error){
        //     console.log(error)
        //     throw new Error("Invalid user data")
        // }



    }catch(error){
        console.log(error)
    }
}


