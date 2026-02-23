const mongoose = require("mongoose");

const addSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    productCat: {
        type: String
    },
    productCount: {
        type: Number
    }
    

}, {timestamps: true});

const AddProduct = mongoose.model("AddProduct", addSchema);
module.exports = AddProduct;
