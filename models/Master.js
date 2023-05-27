const mongoose=require('mongoose');
const masterSchema=new mongoose.Schema({
 user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
 },
 additonal_info:{
    "type": String,
    required:false,
 }
});

const masterModel=mongoose.model('Master',masterSchema);
module.exports=masterModel;