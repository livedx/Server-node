const express = require('express');
const app = express();
const crypto = require('crypto');
const token = {token:null,timeExist:86400,dateCreate:null};


app.post('/register', function (req, res) {
  res.send('OK');
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/login', function (req, res) {
 crypto.randomBytes(48, function(err, buffer) {
  token.token = buffer.toString('hex');
  token.dateCreate =  Date.now();
  console.log(req)
  res.json(
  {
 	token: token,
 	user:req.query
 	}
  );
});
});

app.put('/user_update',(req,res)=>{
  res.send('data updated');

}) 

app.get('/*', function (req, res) {
  res.send('404');
});



app.listen(8000, function () {
  console.log('Example app listening on port 8000');
});
