const mongoose=require('mongoose');
const classSchema=new mongoose.Schema({

    teacher_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher',
    },
    class_name:{
        type:String,
        required:true,
    },
    start_time:{
        type:Date,
        required:true,
    },
    end_time:{
        type:Date,
        required:true,
    }

});

const classModel=mongoose.model('Class',classSchema);
module.exports=classModel;