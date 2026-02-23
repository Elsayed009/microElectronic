const express = require("express");
const router = express.Router(); // a clone of the app linking the app router


const {addproduct, products,search} = require("../controllers/addproductController")
router.post("/addproduct",addproduct)
router.get("/products",products)
router.get("/search",search)

module.exports = router;