const mongoose = require("mongoose");
const productItems = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AddProduct"
    },
    quntity: {
        type: Number,
        min: 1
    }
})
const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    proditems:  [productItems]
}, {timestamps: true})
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart