var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('hello baby');
=======
  res.send('hello Jenkins');
>>>>>>> e00a79375e77128fb31cd206eaac07e312133588
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
