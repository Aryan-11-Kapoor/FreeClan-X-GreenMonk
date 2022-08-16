const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");
const productSchema = new mongoose.Schema({
    title: {type: String,required:true, unique:true},
    desc:{type:String, required:true },
    img:{type:String,required:true},
    category:{type:Array},
    size:{type:String},
    price:{type:Number,required:true},
    inStock:{type:Boolean, default:true},
},
    {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema)