import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

export const connectDB = async() => {
   try{
    //conect to the database
    await mongoose.connect(process.env.DATABASE_URL).then(() => console.log("Database connected"))

   }catch(error){
    console.log(error)
    process.exit();
   }
}