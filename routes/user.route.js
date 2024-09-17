import express from "express";
import { activateUser, createUser, getAllUsers, getCurrentUserProfile, loginUser, loginUser2, logoutCurrentUser, registerUser, updateCurrentUserProfile } from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/verify-user', activateUser);
userRouter.post('/login', loginUser)
userRouter.post('/login-user', loginUser2);
userRouter.post('/logout', logoutCurrentUser);


userRouter.get('/all', getAllUsers)
userRouter.get('/profile', authenticate, getCurrentUserProfile);

userRouter.put('/profile', authenticate, updateCurrentUserProfile);

export default userRouter;