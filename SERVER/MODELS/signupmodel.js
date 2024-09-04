const mongoose=require("mongoose");
const schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
})
const signupmodel=mongoose.model("Signupdata",schema);
module.exports=signupmodel;