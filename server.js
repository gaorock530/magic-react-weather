const express = require('express');
//create express app
var app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  //console.log(req.url);

  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect("http://"+req.hostname+req.url);  
  }else{
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Express server is up and running on port ${PORT}`);
});
