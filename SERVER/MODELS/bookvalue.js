const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    Residencyname:{type:String},
    email:{type:String},
    Bookeddate:{type:String},
})
const booked=mongoose.model("Booking",schema);
module.exports = booked;