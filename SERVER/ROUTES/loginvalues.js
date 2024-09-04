const express=require("express");
const signupmodel=require("../MODELS/signupmodel");
const router=express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");
dotenv.config();
const secretkey=process.env.SECRETKEY;


//signup.js code is here 
router.post("/signup",async(req,res)=>{
    const data=req.body;
    const values=await signupmodel.findOne({email:data.email});
    if(values)
        {
         return res.json({message:"Email already exist",id:1});
        }
    //hashing password
    const hashedpassword=await bcrypt.hash(data.password,10);    
    const insertdata = new signupmodel({
        name:data.name,
        email:data.email,
        password:hashedpassword
    });
    await insertdata.save();
    const token=jwt.sign({email:data.email},secretkey,{expiresIn:"1h"});
    res.json({message:"Data added successfully",id:2,token:token});
})
     
    //login.js code is here 
    router.post("/login",async(req,res)=>{
        const data=req.body;
        const logincheck=await signupmodel.findOne({email:data.email});
        if(!logincheck)
            {
               return res.json({message:"No email id matches you have to signup first",id:1});
            }
        const hashedpassword=await bcrypt.compare(data.password,logincheck.password);    
        if(!hashedpassword)
            {
                return res.json({message:"Invalid Password",id:2});
            }
            const token=jwt.sign({email:logincheck.email},secretkey,{expiresIn:"1h"});
            return res.json({message:"Login successfully",token:token,id:3});
          

    })



module.exports=router;