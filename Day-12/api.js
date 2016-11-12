var express=require("express");
var rooms=require("./data/rooms.json");
var messages=require("./data/messages.json");
var _=require("lodash");
var uuid=require("node-uuid");
var users=require("./data/users.json");

var router=express.Router();
module.exports=router;

router.get("/rooms",(req,res)=>{
    res.json(rooms);
});

router.route("/rooms/:roomid/messages")
    .get((req,res)=> {
        var roomId = req.params.roomid;
        var roomMessages = messages
            .filter(m => m.roomId === roomId)
            .map(m=>{
                var user= _.find(users, u => u.id === m.userId);
                return {text: `${user.name}: ${m.text}`};
            })

        var room = _.find(rooms, r => r.id === roomId);
        if (!room) {
            res.sendStatus(404);
            return;
        }

        res.json({
            room: room,
            messages: roomMessages
        });
    })
    .post((req,res)=> {
        var roomId = req.params.roomid;
        var message={
          roomId: roomId,
            text:req.body.text,
            userId:req.user.id,
            id: uuid.v4()
        };

        messages.push(message);
        res.sendStatus(200);
    })
    .delete((req,res)=> {
        var roomId = req.params.roomid;
        messages=messages.filter(m => m.roomId !== roomId);
        res.sendStatus(200);
    });

