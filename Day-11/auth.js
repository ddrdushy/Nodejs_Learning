var express=require("express");
var passport=require("passport");

var router=express.Router();
module.exports=router;

router.get("/login",(req,res)=>{
    res.render("login");
});

router.post("/login",passport.authenticate('local',{
    successRedirect :'/',
    failureRedirect : '/login'
}));