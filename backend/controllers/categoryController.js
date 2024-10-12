import req from "express/lib/request.js";
import Category from "../models/categoryModel.js";
import CatchAsync from "../utils/CatchAsync.js";


//C- CREATE
export const createCategory = CatchAsync(async(req, res) => {
    try{
        const {name} = req.body;
        if(!name){
            return res.json({error:"Name is required"});
        }
        const existingCategory = await Category.findOne({name})
        if(existingCategory){
            return res.json({error:"Category already exists"});
        }

        const newCategory = await new Category({name}).save();
        res.status(201).json({message:"Category created successfully", data:newCategory})

    }catch(error){
        console.log(error);
        throw new Error(error.message);
    }
});

//create crud ffor categores

//R = READ

export const getAllCategories = async(req, res) => {
    try{
        const categories = await Category.find();
        res.status(200).json({
            success: true,
            data:categories,
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            message:"Error reading categories"
        })
    }
}



//update category

//delete category


//get all categories

//get category by id