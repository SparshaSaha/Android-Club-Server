"use strict"
const express = require("express");
const mongoose = require("mongoose");

//mongodb://heroku_lfl6hfgc:4osuaj11u5g44o65c3feqkkqf6@ds129906.mlab.com:29906/heroku_lfl6hfgc
var db = mongoose.connection.openUri("mongodb://heroku_lfl6hfgc:4osuaj11u5g44o65c3feqkkqf6@ds129906.mlab.com:29906/heroku_lfl6hfgc");




mongoose.connection.once('connected',function(){
  console.log("Connected to database");
});

const app=express();

const port=process.env.PORT || 8080;

require("./Routes")(app,db);
app.listen(port);
