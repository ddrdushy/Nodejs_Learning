var express=require("express");
var rooms=require("./data/rooms.json");
var messages=require("./data/messages.json");
var _=require("lodash");

var router=express.Router();
module.exports=router;

router.get("/rooms",(req,res)=>{
    res.json(rooms);
});

router.get("/rooms/:roomid/messages",(req,res)=>{
    var roomId=req.params.roomid;
    var roomMessages=messages
    .filter(m => m.roomId === roomId);

    var room = _.find(rooms, r => r.id === roomId);
    if (!room) {
        res.sendStatus(404);
        return;
    }

    res.json({
        room:room,
        messages:roomMessages
    });
});