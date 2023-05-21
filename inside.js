const express=require("express");
var app = express();
app.set('view engine', 'ejs');
var https = require("https");
const bodyparser = require("body-parser");
function myfun(){
app.get("/WeatherProject/weather.html",function(req,res){
  res.sendFile(__dirname+"/weather.html");
  }); 
}