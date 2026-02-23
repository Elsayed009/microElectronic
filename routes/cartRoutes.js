const express = require("express");

const router = express.Router();

const {
    addCartController,
    removeCartController,
    getCartController
} = require("../controllers/cartController");


router.post("/cart",addCartController, removeCartController,getCartController)