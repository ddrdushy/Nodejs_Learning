fs.readFile(req.url.substr(1),(err,data)=>{
    if(err){
        console.log("error: File Not Found "+ err);
        res.statusCode=404;
        res.end();
        return;
    }
    res.end(data);
});