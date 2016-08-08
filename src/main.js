/**
 * Created by yang on 2016/8/8.
 */
var express = require('express');
var app = express();

app.use(express.static('./public'));

//app.get('/', function (req, res) {
//    res.send('Hello World!');
//});

app.listen(80, function () {
    console.log('Example app listening on port 3000!');
});