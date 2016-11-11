var passport=require("passport");
var LocalStrategy=require("passport-local").Strategy;
var users=require("./data/users.json");
var _=require("lodash");

passport.use(new LocalStrategy((username, password, done)=>{
    var user= _.find(users,u => u.name === username);

    if(!user || user.password !== password){
        done(null,false);
        return;
    }

    done(null,user);
}));

passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((user,done)=>{
    done(null,user);
});