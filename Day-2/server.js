var http=require("http");
var serverStaticContent=require("./static.js");

http.createServer(function(req,res){
    console.log(req.url);

    if(req.url.startsWith('/static/')){
        serverStaticContent(req,res);
        return;
    }
    res.end("Hello World");
}).listen(3000,'127.0.0.1',function(){
    console.log("Server is Listening on port 3000");
});