const express =require("express");
const connect = require("./config/db");
const router = require("./Routes/user.route");
const app=express()
app.use(express.json())

app.use(router)

app.listen(8090,()=>{
    console.log("server is 8090");
    connect()
})