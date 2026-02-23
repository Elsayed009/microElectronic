const express = require("express");
const router = express.Router();


const {register, login, registers} = require("../controllers/authController");


router.post ("/register", register);
router.post("/login", login);
router.get("/registers",registers)


module.exports = router;