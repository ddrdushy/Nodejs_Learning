var fs=require("fs");

console.log("Executing the static module");
function canHandle(res){
    return res.url.startsWith("/static/")||
            res.url.startsWith("/favicon.ico");
}
exports.canHandle=canHandle;

function serveAssets(req,res){
    var url=req.url.substr(1);
    if(url==="favicon.ico")
        url="static/favicon.ico";

    fs.readFile(url,(err,data)=>{
        if(err){
            console.log("File Not Found "+err);
            res.statusCode=404;
            res.end();
            return;
        }
        res.end(data);
    });

}
exports.serveAssets=serveAssets;