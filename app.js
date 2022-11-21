var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/instant_transfer.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "instant_transfer.html" );  
})  
app.post('/process_post', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       ben_name:req.body.ben_name,  
       ben_no:req.body.acc_no,
       ifsc:req.body.ifsc,
       amount:req.body.amt,
       purp:req.body.Purpose  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  