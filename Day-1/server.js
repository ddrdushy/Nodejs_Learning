var http = require("http");

http.createServer(function(request,response){
    console.log(`Request Coming from: ${request.url}`);

    if(request.url.startsWith("/static/")){
        return ;
    }

    response.end("Hello World!");
}).listen(3000,"127.0.0.1",()=>{
   console.log("Server is listening on localhost port 3000");
});