var http=require("http");
var static=require("./static.js");

http.createServer(function webRequestHandler(req,res){
    console.log(req.url);

    if(static.canHandleRequest(req)){
        static.serverStaticAssets(req,res);
        return;
    }
    res.end("Hello World");
}).listen(3000,'127.0.0.1',function(){
    console.log("Server is Listening on port 3000");
}); 