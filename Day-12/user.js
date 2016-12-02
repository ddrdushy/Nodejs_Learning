var uuid=require("node-uuid");
var _=require("lodash");
var express=require("express");
var users=require("./data/users.json");

var router=express.Router("/user");
module.exports=router;


router.use((req,res,next)=>{
    if(req.user.admin){
        next();
        return;
    }
    res.redirect("/login");
});


router.get("/", (req, res)=> {
    res.render("users/users", {
        title: "Users",
        users: users
    });
});

router.route("/add")
    .get( (req, res)=> {
        res.render("users/add");
    })
    .post((req, res)=> {
        var user = {
            name: req.body.name,
            id: uuid.v4(),
            password:req.body.password,
            "admin":req.admin
        };
        users.push(user);
        res.redirect(req.baseUrl + "/");
    });

router.get("/delete/:id", (req, res)=> {
    var userId = req.params.id;
    users = users.filter(u => u.id !== userId);
    res.redirect(req.baseUrl+"/");
});

router.route("/edit/:id")
    .all((req,res,next)=>{
        var userId = req.params.id;
        var user = _.find(users, r => r.id === userId);
        if (!user) {
            next(new Error("Something went wrong"));
            return;
        }
        res.locals.user=user;
        next();
    })
    .post((req, res)=> {
        res.locals.user.name = req.body.name;
        res.locals.user.password = req.body.password;
        res.locals.user.admin = req.body.admin;
        res.redirect(req.baseUrl+"/");
    }).get((req, res)=> {
    res.render("users/edit");
});
