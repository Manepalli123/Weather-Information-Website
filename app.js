const express = require('express'); 
var app = express();
app.set('view engine', 'ejs');
const https = require("https");
const bodyparser = require("body-parser");
const { emitKeypressEvents } = require("readline");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({expected:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/weather.html");
});     
app.post("/",function(req,res){
    const cityname=req.body.cityname;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ cityname +"&appid=ffdd5064e23a5a00eb7b1230f2f80979&units=metric";
    https.get(url, function(response){
    response.on("data", function(data){
        const weatherdata = JSON.parse(data);
        // console.log(weatherdata);
        var temperature=weatherdata.main.temp;
          var tempmax=weatherdata.main.temp_max;
         var tempmin=weatherdata.main.temp_min;
         var hum=weatherdata.main.humidity;
         var des=weatherdata.weather[0].description;
        
        res.render("list",{
          place:cityname,
          TEMP:temperature,
          TEMPMAX:tempmax,
          TEMPMIN:tempmin,
          HUMIDITY:hum,
          DESCRIPTION:des
        });
});
});
});


app.get("/",function(req1,res1){
  res1.sendFile("/weather.html");
});

app.listen(3000,function(){
    console.log("3000 server STARTED!!!");  
  });
