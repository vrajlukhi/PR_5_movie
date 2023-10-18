const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:String
})
const User=mongoose.model("Userdata",UserSchema)
module.exports=User