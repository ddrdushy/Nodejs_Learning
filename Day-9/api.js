var express=require("express");
var rooms=require("./data/rooms.json");

var router=express.Router();
module.exports=router;

router.get("/rooms",(req,res)=>{
    res.json(rooms);
});