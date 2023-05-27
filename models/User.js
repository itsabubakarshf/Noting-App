const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    userType:{
        type:String,
        enum:['user','student','teacher','master'],
        default:'user',
    },
    verified:{
        type:Boolean,
        default:false,
    }
});

const userModel=mongoose.model('User',userSchema);
module.exports=userModel;