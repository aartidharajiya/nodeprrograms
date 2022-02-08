var mongoose=require("mongoose");
var productSchema=mongoose.Schema({
    name:String,
    price:Number,
    rating:Number
})
module.exports=mongoose.model('products',productSchema);