var express=require("express");
var passport=require("passport");
var users=require("./data/users.json");

var router=express.Router();
module.exports=router;

router.get("/login",(req,res)=>{
    if(req.app.get("env") === "development"){
        var user=users[0];

        req.logIn(user,(err)=>{
           if(err){return next();}
            return res.redirect("/");
        });
        return;
    }
    res.render("login");
});

router.post("/login",passport.authenticate('local',{
    successRedirect :'/',
    failureRedirect : '/login'
}));

router.get('/logout',(req,res)=>{
   req.logout();
   res.redirect('/login');
});