var app = require('express')(),
    admin = require('./admin'),
    bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send("Welcome");
});

app.get('/books', function(req, res){
	admin.getBooks(res);
});

app.post('/books', function(req, res){
    admin.addBooks(res, req.body);
});

app.listen(3000, function(){
   console.log('Example app listening on port 3000');
});