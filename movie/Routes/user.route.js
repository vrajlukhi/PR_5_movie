const {Router}=require("express")
const { signupuser, deleteuser, loginuser, userdata } = require("../controllers/user.controller")
const { signupfield, loginfield } = require("../middlewares/user.middleware")
const router=Router()

router.get("/",(req,res)=>{
    res.status(200).send("Welcome to the movie API")
})
router.post("/user/signup",signupfield,signupuser)
router.post("/user/login",loginuser)
router.delete("/user/delete/:id",deleteuser)
router.get("/user/",userdata)

module.exports=router