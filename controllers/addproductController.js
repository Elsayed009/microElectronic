
const AddProduct = require("../models/AddProduct");
const User = require("../models/User");

// const bcrypt = require("bcrypt")


const addproduct=  async (req,res)=>{
    try{
        const {productName,productCat,productCount, email}= req.body;
        const user = await User.findOne({email});
        if(!user){
             return res.status(400).json({msg: "User not found",
                data: res.status(400)
             }); 
            }
           
        if(user.role !== "admin"){
            return res.status(403).json({msg: "you r not admin"});
            
        }
        // compailor runs line by lind if the if condition failed com will move to the next
        const addproduct = await AddProduct.create({
            productName,
            productCat,
            productCount
        })
        res.status(201).json({
            msg: "product created succefly",
            data: addproduct
        })
    }catch(err){
            res.status(500).json({msg: `server error: ${err.message}`}); // attantion this error will be appered for the user to see
            console.log(err.message)
    }
}




const getproducts = async (req, res)=>{
    try{
        const products = await AddProduct.find();
        res.status(200).json({
            msg: "get data",
            data: products
        })
    }catch (err){
        res.status(500).json({msg: `server error: ${err.message}`});
        console.log(err.message)

    }
}


const search = async (req, res)=>{
    try{
        const {productName}= req.body;
        if (!productName){
            return res.status(400).json({msg: "not found"});
        }
    
        const search = await AddProduct.find({
            productName: {$regex: productName, $options: "i"}});
        
        res.status(200).json({
            msg: "get data",
            data: search
        })
    }catch (err){
        res.status(500).json({msg: `server error: ${err.message}`});
        console.log(err.message)

    }
}



module.exports = {
    getproducts,
    addproduct,
    search
}