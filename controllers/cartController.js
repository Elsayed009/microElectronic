// اول حاجة تحدد انت هتشتغل على ايه 

const AddProduct = require("../models/AddProduct");
const Porduct = require("../models/AddProduct");
const Cart = require("../models/Cart");
const User = require("../models/User");
// عايز اجيب الداتا
// عايز اعمل فالديشن
// عايز اجيب اليوزر
// لو اليوزر موجود أجيبه
// هعمل ادد و كريت




const addCartController = async (req, res)=> {
    try{
        // get data
        const {productId,quntityId,userId } = req.body;
        // validation 
        if(!productId || !quntityId|| !userId) return res.status(400).json({msg: "missing data"});
            const user = await User.findById(userId);
            if(!user)return res.status(404).json({msg: "user not found"});
            const produ_ct = await AddProduct.findById(productId);
            if(!produ_ct)return res.status(404).json({msg: "user not found"});
            if(quntity > produ_ct.productCount)return res.json({msg: "stock not enough"});
            let cart = await Cart.find({user: userId});
            if(!cart) cart = await Cart.create({user, proditems: []});

    }catch(err){
        console.log(err.message);
        res.status()
    }
}

const removeCartController = async (req, res)=> {
    try{

    }catch(err){
        
    }
}

const getCartController = async (req, res)=> {
    try{

    }catch(err){
        
    }
}


module.exports = {
    addCartController,
    removeCartController,
    getCartController
}