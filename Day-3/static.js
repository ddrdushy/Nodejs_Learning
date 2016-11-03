var fs=require("fs");

function canHandlereq(req){
    return req.url.startsWith("/static/") ||
            req.url.startsWith("/favicon.ico");
}
exports.canHandlereq=canHandlereq;

function serverasset(req,res){
    var url=req.url.substr(1);
    if(url==="favicon.ico"){
        url='/static/favicon.ico';
    }
    fs.readFile(url,function(err,data){
        if(err){
            console.log("file not found "+err);
            res.statusCode=404;
            res.end();
        }
        res.end(data);
    });
}

exports.serverasset=serverasset;
