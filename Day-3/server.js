var http=require("http");

var static=require("./static.js");

http.createServer(function(req,res){
    console.log(req.url);

    if(static.canHandlereq(req)){
        static.serverasset(req,res);
        return;
    }
    res.end("hello world");
}).listen(3000,"127.0.0.1",function(){
    console.log("Server listening through port 3000");
});