import mongoose from "mongoose";

const  categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        maxLenght:32,
        unique:true,
    }
})

const Category = mongoose.model("Category", categorySchema);
export default Category;