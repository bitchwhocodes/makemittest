var express = require('express');
var app = express();

var port = process.env.PORT || 1337;

var log = "";
app.use(express.bodyParser());
app.get('/webhook_url', function (req, res) {
    
    if(request.body){
         res.setHeader('Content-Type', 'application/json');
    res.end(request.body);
}else{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(req.query.venmo_challenge);
}
    
});

app.post('/webhook_url',function(req,res){

    res.setHeader('Content-Type', 'application/json');
    res.end(request.body);

});


app.get('/', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello world");
});
    

app.get('/test', function(req, res) {
   
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello world");
});

app.post('/',function(req,res){

    res.setHeader('Content-Type', 'application/json');
    res.end(request);
});


app.get('/arduino', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("01,02\n");
});

var server = app.listen(port, function () { });
