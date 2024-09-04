const express = require("express");
const router = express.Router();
const model = require("../MODELS/residencymodel");
const liked = require("../MODELS/likedmodel");
const mongoose = require("mongoose")
const bookedvalue = require("../MODELS/bookvalue");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const singup = require("../MODELS/signupmodel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_PASSWORD);
const secretkey = process.env.SECRETKEY;
const nodetoemail = process.env.NODEEMAIL;
const nodepassword = process.env.NODEPASSWORD;


let residencies = 0;

router.post("/house",async(req,res)=>{
    const data = req.body;
    const insertdata = new model({
        country:data.country,
        state:data.state,
        latitude:data.latvalue,
        longitude:data.longvalue, 
    })
    await insertdata.save();
    residencies = insertdata._id;
})

router.post("/imageurl",async(req,res)=>{
    const data = req.body;
    await model.updateOne({_id:residencies},{imageurl:data.url});

})

router.post("/title",async(req,res)=>{
    const data = req.body;
    await model.updateOne({_id:residencies},{title:data.title,description:data.description,price:data.price});
})

router.post("/rooms",async(req,res)=>{
    const data = req.body;
    await model.updateOne({_id:residencies},{bedroom:data.bedroom,bathroom:data.bathroom,parking:data.parking});
    res.json({message:residencies});
})

//retriving data from database
router.get("/array",async(req,res)=>{
    const entiredata = await model.find();
    res.json({entiredata});
    //console.log(entiredata);
})

//geting one value for biggerhouse
router.post("/onevalue",async(req,res)=>{
    const data = req.body;
    const check = await model.find({_id:data.objectid});
    res.json({check});
})

//getting value for the liked favorites
router.post("/likedvalue",(req,res)=>{
    const data = req.body;
    jwt.verify(data.token,secretkey, async (err,decoded)=>{
        if(err)
        {
            return res.json({err});
        }
    const insertdata =await new liked({
        id:data.id,
        email:data.emailvalue,
    })
    await insertdata.save();    
    return res.json(decoded);
})
})
//sending data to favorites.js
router.post("/favdisplay",(req,res)=>{
    const data = req.body;
    jwt.verify(data.token,secretkey, async (err,decoded)=>{
        if(err)
        {
            return res.json({err});
        }
    const value = await liked.find({email:data.emailvalue});
    return res.json({value});
})
})

//receiving selected date 
router.post("/datevalue",(req,res)=>{
    const data=req.body;
    jwt.verify(data.token,secretkey, async (err,decoded)=>{
        if(err){
           return res.json({err});
        }
    const insertdata =await new bookedvalue({
      Residencyname:data.name,
      email:data.email,
      Bookeddate:data.dates,  
    })
    await insertdata.save();
    return res.json(decoded);
});
})



//receiving email from the booking.js 
router.post("/emaildetail",async(req,res)=>{
    const data =  req.body;
    console.log(data.emailvalue);
    const value = await bookedvalue.find({email:data.emailvalue});
    console.log(value);
     res.json({value});
})

//Addproperty token authenticaton
router.post("/Addpropertytoken",(req,res)=>{
    const data = req.body;
    jwt.verify(data.token,secretkey,(err,decoded)=>{
        if(err)
        {
            return res.json({err});
        }
        return res.json({decoded});
    })
})

//contact us authentication
router.post("/nodeemail",(req,res)=>{
    const data = req.body;
    jwt.verify(data.token,secretkey,(err,decoded)=>{
        if(err)
        {
            return res.json({err});
        }
        res.json({decoded});
    })

})

//nodemailer
router.post("/sendmail",(req,res)=>{
    const data = req.body;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: nodetoemail,
    pass: nodepassword,
  }
});

var mailOptions = {
  from: nodetoemail,
  to: nodetoemail,
  subject: data.emails,
  text: data.text,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.json({message:"email send"});
  }
});
})

router.post("/Forgot",async(req,res)=>{
    const data = req.body;
    console.log(data.email);
    console.log("kavin");
    const token = await jwt.sign({email:data.email},secretkey,{expiresIn:"1h"});
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: nodetoemail,
    pass: nodepassword,
  }
});

var mailOptions = {
  from: nodetoemail,
  to: data.email,
  subject: 'Sending Link to Reset Password',
  text: `http://localhost:3000/reset/${token}`,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
})

router.post("/Confirm",(req,res)=>{
    const data = req.body;
    jwt.verify(data.token,secretkey,async(err,decoded)=>{
        if(err)
        {
            return res.json({err});
        }
        const hashedpassword =await bcrypt.hash(data.confirmpass,10);
        await singup.updateOne({email:decoded.email},{password:hashedpassword});
        res.json({decoded});
    })

})

//payment stroage stripe 
router.post("/payment",(req,res)=>{
    stripe.charges.create({
      source : req.body.tokenId ,
      amount : req.body.amount,
      currency : "inr",
  
    },(stripeErr,stripeRes)=>{
      if(stripeErr){
        res.json({stripeErr})
      }
      else{
        res.json({stripeRes})
      }
    })
  }) 


module.exports = router;