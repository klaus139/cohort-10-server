import CatchAsync from "../utils/CatchAsync.js";

export const authorizeAdmin = CatchAsync(async(req, res, next) => {
    try{
        if(req.user && req.user){
            next()
        } else{
            res.status(401).send("Not authorized as an admin")
        }

    }catch(error){
        console.log(error)
    }
} )