// REQUIRES
const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
// custom require ... a file of ours!
const listsjson = './private/data/info.json';
const listshtml = './private/data/info.txt';

// STATIC DIRECTORIES
app.use('/css', express.static('private/css'));
app.use('/js', express.static('private/js'));

// GENERAL CONSTANTS
const msg404 = 'These are not the codes that you are looking for.';


// APP GETS
app.get('/', function (req, res) {
    fs.readFile("./private/html/Comp1537Lab07HarrisonOliver.html", function (error, pgRes) {
        if (error) {
            res.writeHead(404);
            res.write(msg404);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(pgRes);
        }

        res.end();
    });

});






app.get('/ajax-GET', function (req, res) {

    // set the type of response:
    res.setHeader('Content-Type', 'application/json');
    fs.readFile('./private/data/info.json', function(error, data){
      const jsonData = data;
      res.send(jsonData);
    });


});

app.get('/ajax-GET-list', function (req, res) {

    //res.setHeader('Content-Type', 'application/json');
    //console.log(req.query['format']);
    let formatOfResponse = req.query['format'];
    let dataList = null;

    if(formatOfResponse == 'html-list') {

        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./private/data/info.txt', function(error, data) {
          const htmlData = data;
          res.send(htmlData);
        });

    }
});


// APP POSTS
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Notice that this is a 'POST'
app.post('/post-form', function (req, res) {
      res.setHeader('Content-Type', 'application/json');

      console.log("Stuff sent to server", req.body);

      res.send(["You sent me:", req.body]);

});



// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});