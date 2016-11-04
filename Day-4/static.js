var fs=require("fs");

function canHandle(req){
    return req.url.startsWith("/static/") ||
            req.url.startsWith("/favicon.ico");
}
exports.canHandle=canHandle;

function serveAssets(req,res){
    var url =req.url.substr(1);
    if(url==="favicon"){
        url="/static/favicon.ico";
    }
    fs.readFile(url,(err,data)=>{
        if(err){
            console.log("File not found "+err);
            res.statusCode=404;
            res.end();
        }
        res.end(data);
    });
}
exports.serveAssets=serveAssets;