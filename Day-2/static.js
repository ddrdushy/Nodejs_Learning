var fs=require("fs");

function canHandleRequest(req){
    return req.url.startsWith("/static/")
        || req.url.startsWith("/favicon.ico");
}

exports.canHandleRequest=canHandleRequest;

function serverStaticAssets(req,res) {
    var url=req.url.substr(1);
    if(url==="favicon.ico"){
        url='static/favicon.ico'
    }
    
    fs.readFile(url, (err, data)=> {
        if (err) {
            console.log("error: File Not Found " + err);
            res.statusCode = 404;
            res.end();
            return;
        }
        res.end(data);
    });
}

exports.serverStaticAssets = serverStaticAssets;