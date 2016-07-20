"use  strict";

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

responses = [
"IT IS CERTAIN", 
"IT IS DECIDEDLY SO", 
"WITHOUT A DOUBT", 
"YES", 
"DEFINITELY", 
"YOU MAY RELY ON IT", 
"AS I SEE IT YES", 
"YES", 
"MOST LIKELY", 
"OUTLOOK GOOD",
"SIGNS POINT TO YES",
"REPLY HAZY",
"ASK LATER",
"BETTER NOT TELL YOU NOW",
"CANNOT PREDICT",
"DONT COUNT ON IT",
"MY REPLY IS NO",
"MY SOURCES SAY NO",
"OUTLOOK NOT SO GOOD",
"VERY DOUBTFUL"
];

app.get("/response", function (req, res) {

	var i = Math.floor(Math.random() * (20));
	console.log(i);

    console.log("GET Request to: /response");
    res.status(200).send(responses[i]);
});

app.listen(process.env.PORT || 30000, function(){
	console.log("Listening on port 30000");
	
});
