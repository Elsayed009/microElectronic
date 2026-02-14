//preparing the environment for work

require("dotenv").config();
const express= require("express");
const app = express();
const mongoose = require("mongoose")
const PORT = process.env.PORT || 6000;
app.use(express.json());
const URL = process.env.DB_URL;
const bcrypt = require("bcrypt")



async function dblinking() {
    try{
        await mongoose.connect(URL);
        console.log("worked")
    }catch(err){
        console.log("error details: ", err.message)
    }
    
}


dblinking()

// require models
const User = require("./models/User");

// create reoutes
app.post("/register", async (req, res )=>
{
    try {
        //get data
        const {username, email, password, role}= req.body;
        // vaildated
        if (!username|| !email|| !password) return res.status(400).json({msg: "error: invalide data"})
        //creat new user
    const existUser = await User.findOne({email})
    if(existUser) return res.status(400).json({msg: "the acc id daplcated"})
        const hashPassword = await bcrypt.hash(password, 10); // encrypting the passwords
        //response
        const user = await User.create({
            username,
            email,
            password: hashPassword,
            role
        });
        res.status(201).json({ // important, this code here is the data 
        // that showed in the postman prview tap when you do the post action
            msg: "created",             
            data: user
        })

    }catch (err){
        res.status(500).json({msg:"server error",
            error: err.message})
        console.log(err.message)
    }

}) 


app.post("/login", async (req, res)=> {
    try{
        const {email, password}= req.body;
        //validate data
        if(!email || !password)
            return res.status(400).json({msg: "missing data"});
        const user = await User.findOne({email}); // find the email to compair
        if(!user) return res.status(404).json({msg: "not found!, create one.."});
        
        //match password

        const matchPassword = await bcrypt.compare(password, user.password);
        if(!matchPassword) return res.status(400).json({msg: "invailad password"});
        res.status(200).json({
            msg: "success login",
            data: user
        })
    }catch(err){
            res.status(500).json({msg: `server error: ${err.message}`}); // attantion this error will be appered for the user to see
            //  so you should this way in the dev proccess only for security peropse
            console.log(err.message)
    }
})





app.get("/registers", async (req, res)=>{
    try{
        const registers = await User.find();
        res.status(200).json({
            msg: "get data",
            data: registers
        })
    }catch (err){
        res.status(500).json({msg: `server error: ${err.message}`});
        console.log(err.message)

    }
})


// "" is a status code for the route

app.listen(PORT, ()=>{
    console.log("worked on port: ", PORT)
})
