// CartItem.js
const mongoose = require('mongoose');
var Schema=mongoose.Schema;
var CartItem=new Schema(
    {
        itemId:String,
        quantity:Number
    }
)   

module.exports = mongoose.model('CartItem', CartItem);
