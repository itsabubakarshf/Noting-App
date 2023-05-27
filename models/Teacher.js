const mongoose=require('mongoose');
const teacherSchema=new mongoose.Schema({
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

const teacherModel=mongoose.model('Teacher',teacherSchema);
module.exports=teacherModel;