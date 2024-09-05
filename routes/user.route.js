import express from "express";

const userRouter = express.Router();

userRouter.post("/register", (req, res) => {
    res.status(200).json({
        message:"i am here",
        success:"true"
    })
})

export default userRouter;