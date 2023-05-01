var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var user=new Schema({
    name:String,
    email:String,
    password:String,
    contact_no:Number,
    address:String,
    pincode:Number
});

module.exports=mongoose.model('User',user)