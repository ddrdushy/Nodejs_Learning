var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    console.log(req.url);

    if(req.url.startsWith('/static/')){
        fs.readFile(req.url.substr(1),(err,data)=>{
            if(err){
                console.log("error: File Not Found "+ err);
                res.statusCode=404;
                res.end();
                return;
            }
            res.end(data);
        });
        return;
    }
    res.end("Hello World");
}).listen(3000,'127.0.0.1',function(){
    console.log("Server is Listening on port 3000");
});