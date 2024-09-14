import express from "express";
import { activateUser, createUser, getAllUsers, loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post('/register', createUser)
userRouter.post('/verify-user', activateUser);
userRouter.post('/login', loginUser)
userRouter.get('/all', getAllUsers)

export default userRouter;