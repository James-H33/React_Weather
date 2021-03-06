var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;
const PORTIP = process.env.IP;

// Middleware
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);

  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, PORTIP, function() {
  console.log('Express server is running on ' + PORT);
});
