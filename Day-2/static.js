var fs=require("fs");

function canHandleRequest(req){
    return req.url.startsWith('/static/');
}

exports.canHandleRequest=canHandleRequest;

function serverStaticAssets(req,res) {
    fs.readFile(req.url.substr(1), (err, data)=> {
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