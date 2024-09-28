import Product from "../models/productModel.js";
import CatchAsync from "../utils/CatchAsync.js";


export const addProduct = CatchAsync(async(req, res) => {
    try{
        const {name, description, price, category, quantity, brand, image} = req.fields;

        //validation
        switch(true){
            case !name:
                return res.json({error:"Name is required"});
            case !brand:
                return res.json({error:"Brand is required"});
            case !description:
                return res.json({error:"Description is required"});
            case !price:
                return res.json({error:"Price is required"});
            case !category:
                return res.json({error:"Category is required"});
            case !quantity:
                return res.json({error:"quantity is required"});
            case !image:
                return res.json({error:"Image is required"});
        }

        const product = new Product({...req.fields});
        await product.save();
        return res.json(product);

    }catch(error){
        console.log(error)
        res.status(400).json(error.message)
    }
})