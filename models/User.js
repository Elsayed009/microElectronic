const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true // remove spaces from right and left 
        // of the incoming strig from user
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // min is for number, minlength is for string
    },
    role: {
        type: String,
        enum: ["admin", "user"], // عشان هو عايز نوعين من الأدوار في الموقع وعشان كدا استخدمنا هنا الاينم
        default: "user"
    }



},{timestamps: true});


const User = mongoose.model("User", userSchema); // "User" here is an eliase name 
module.exports = User;