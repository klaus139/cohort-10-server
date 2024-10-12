import CatchAsync from "../utils/CatchAsync.js";

export const authorizeAdmin = CatchAsync(async(req, res, next) => {
    try{
        if(req.user && req.user.isAdmin){
            next();
        }else{
            res.status(400).send('Not authorized as an admin')
        }

    }catch(error){
        console.log('admin auhority error', error)
    }
})