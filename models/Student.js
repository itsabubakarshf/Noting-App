const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
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

const studentModel=mongoose.model('Student',studentSchema);
module.exports=studentModel;