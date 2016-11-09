var uuid=require("node-uuid");
var _=require("lodash");
var express=require("express");
var rooms=require("./data/rooms.json");

var router=express.Router();
module.exports=router;

router.get("/rooms", (req, res)=> {
        res.render("rooms", {
            title: "Admin Rooms",
            rooms: rooms
        });
    });

router.route("/rooms/add")
    .get( (req, res)=> {
        res.render("add");
    })
    .post((req, res)=> {
        var room = {
            name: req.body.name,
            id: uuid.v4()
        };
        rooms.push(room);
        res.redirect(req.baseUrl + "/rooms");
    });

router.get("/rooms/delete/:id", (req, res)=> {
        var roomId = req.params.id;
        rooms = rooms.filter(r => r.id !== roomId);

        res.redirect(req.baseUrl+"/rooms");
    });

router.route("/rooms/edit/:id")
    .post((req, res)=> {
        var roomId = req.params.id;
        var room = _.find(rooms, r => r.id === roomId);
        if (!room) {
            res.sendStatus(404);
            return;
        }
        room.name = req.body.name;

        res.redirect(req.baseUrl+"/rooms");
    }).get((req, res)=> {
        var roomId = req.params.id;
        var room = _.find(rooms, r => r.id === roomId);
        if (!room) {
            res.sendStatus(404);
            return;
        }
        res.render("edit", {room});
    });
