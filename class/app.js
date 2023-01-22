const express = require("express")
const bodyParser = require("body-parser");

const app = express();
const axios = require("axios");
const { response } = require("express");


app.use(bodyParser.urlencoded({extends:true}));

app.get("/",function(req,res){
    // console.log("get requst accepted");
    // res.send("Get request accepted");
    // axios.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=a288562150568391480ff3a3c32c4b9a&units=metric").then(function(response){
    //         console.log(response);
            
    // })

    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    console.log("post accepted")
    console.log(req.body.cityname);
    var city = req.body.cityname;
    var Url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=a288562150568391480ff3a3c32c4b9a&units=metric"
    axios.get(Url)
    .then(function(response){
        var temper = response.data.main.temp;
        var description = response.data.weather[0].description;
        // console.log(temper)
        // console.log(description)
        res.write("tem is"+temper)
    res.end()
    })

})

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=a288562150568391480ff3a3c32c4b9a&units=metric

app.listen("3001",function(){
    console.log("http://localhost:3001");
})