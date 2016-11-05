var http=require("http");
var static=require("./static.js");

http.createServer((req,res)=>{
    console.log(req.url);
    if(static.canHandle(req)){
        static.serveAssets(req,res);
        return;
    }
    res.end("Hello World");
}).listen(3000,"127.0.0.1",()=> {
    console.log("Server Listening on localhost port 3000");
});





