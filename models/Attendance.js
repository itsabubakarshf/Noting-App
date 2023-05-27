const mongoose=require('mongoose');
const attendanceSchema=new mongoose.Schema({

    student_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student',
    },
    class_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Class',
    },
    attendance_date:{
        type:Date,
        required:true,
    },
    marked_present:{
        type:Boolean,
        required:true,
    },
    reason_for_absence:{
        type:String,
        required:false,
    }

});

const attendanceModel=mongoose.model('Attendance',attendanceSchema);
module.exports=attendanceModel;