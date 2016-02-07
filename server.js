var express = require('express');
var concat = require('concat-files');

var app = express();

app.get('/', function (req, res) {
    const options = {
        root: './',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true,
            'Access-Control-Allow-Origin': '*'
        }
    }
    const destination = 'data.txt'
    concat([
        './fairy-tales.txt',
        './christmas-stories.txt'
    ], destination, () => {
        res.sendFile(destination, options, function (error) {
            if (error) {
                console.log(error);
                res.status(error.status).end();
            } else {
                console.log('Sent:', destination);
            }
        });
    });
});

app.listen(3020, function () {
  console.log('Example app listening on port 3020!');
});