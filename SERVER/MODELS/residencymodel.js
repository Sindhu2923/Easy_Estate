const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    email:{type:String},
    country:{type:String},
    state:{type:String},
    latitude:{type:String},
    longitude:{type:String},
    imageurl:{type:String},
    title:{type:String},
    description:{type:String},
    price:{type:String},
    bedroom:{type:Number},
    bathroom:{type:Number},
    parking:{type:Number},
})
const residencymodel = mongoose.model("Residencies",schema);
module.exports=residencymodel;