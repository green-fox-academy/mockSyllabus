'use strict';

var express = require('express');
var app = express();

app.use('/assets', express.static('./assets'));

app.get('/', function(req, res) {
    res.sendFile();    
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});