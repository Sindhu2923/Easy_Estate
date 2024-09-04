const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    email:{type:String},
    id:{type:Number},
})
const likedvalue = mongoose.model("Favorites",schema);
module.exports=likedvalue;