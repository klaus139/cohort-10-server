import express from "express";
import dotenv from "dotenv"
import morgan from "morgan";
import cookieParser from "cookie-parser";
dotenv.config();
import userRouter from "./routes/user.route.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser())

connectDB();

app.use("/api/user", userRouter);

app.use("*", (req, res) => {
    res.status(404).json({
        message:"Not found",
        success:false
    })
})

const port = 4000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})