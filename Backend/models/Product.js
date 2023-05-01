var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var product=new Schema({
    proid:String,
    proname:String,
    proimage:String,
    proprice:String,
    procategory:String,
    prodetail:String
});
module.exports=mongoose.model('Product',product)