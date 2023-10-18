const User = require("../models/user.schema")

const signupuser=async(req,res)=>{
    let data=await User.create(req.body)
    res.status(201).send(data)
}
const deleteuser=async(req,res)=>{
    let{id}=req.params
    let data=await User.findByIdAndDelete(id)
    res.status(200).send({message: 'User deleted successfully'})
}
const loginuser=async(req,res)=>{
    let{email,password}=req.body
    let data=await User.findOne({email:email})
    if(!data || password!=data.password){
        res.status(401).json({error:"Invalid username or password"})
    }
    else{
        res.status(200).send({message: 'Logged in successfully'})
        let data=await User.create(req.body)
    }
}
const userdata=async(req,res)=>{
    let data = await User.find()
    res.status(200).send(data)
}
module.exports={signupuser,deleteuser,loginuser,userdata}