import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    // phone:{
    //     type:Number,
        

    // },
    
    email:{
        type:String,
        required:true,
        unique:true,

    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false,
    }

},{timestamps:true})

const User = mongoose.model("User", userSchema);
export default User