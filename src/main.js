/**
 * Created by yang on 2016/8/8.
 */
const express = require('express');
const app = express();

app.use(express.static('./public'));

//app.get('/', function (req, res) {
//    res.send('Hello World!');
//});

const port = 80;
app.listen(port, () => {
    console.log('Example app listening on port', port);
});