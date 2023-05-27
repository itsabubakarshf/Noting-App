const express=require('express');
const router=express.Router();
const User=require('../models/User');

router.post('/register',async(req,res)=>{
    const {username,email,password}=req.body;

    if(!username){
        return res.status(400).json({message:"Username is required"});
    }
    if(!email){
        return res.status(400).json({message:"Email is required"});
    }
    if(!password){
        return res.status(400).json({message:"Password is required"});
    }

    //check password length
    if(password.length<8){
        return res.status(400).json({message:"Password must be atleast 8 characters"});
    }

    try {
        const existingUser=await User.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"Email already exists"});
        }else{
            const user=new User({username,email,password});
            await user.save()
            return res.status(201).json({message:"User created successfully"});
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Something went wrong"});
    }

})

module.exports=router