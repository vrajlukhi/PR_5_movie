const {Router}=require("express")
const { signupuser, deleteuser, loginuser, userdata, addmovie, updatemovie, moviedelete, movierating, moviecomment, filter } = require("../controllers/user.controller")
const { signupfield, loginfield } = require("../middlewares/user.middleware")
const router=Router()

router.get("/",(req,res)=>{
    res.status(200).send("Welcome to the movie API")
})
router.post("/user/signup",signupfield,signupuser)
router.post("/user/login",loginuser)
router.delete("/user/delete/:id",deleteuser)
router.get("/user/",userdata)
router.post("/movie/create",addmovie)
router.patch("/movie/update/:id",updatemovie)
router.delete("/delete/:id"  , moviedelete)
router.patch("/rating/:id" , movierating)
router.patch("/comment/:id" , moviecomment) 
router.get("/filter" , filter)


module.exports=router