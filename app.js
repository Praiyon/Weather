var temp;
var loc;
var icon;
var humidity;
var wind;
var direction;
var APPID = "41ad707223998ba21f71b5f2bbb47581";
//var city = 99501;
function retrieve(){
    $.getJSON('current.city.list.json',function(data){
        console.log(data);

    });
}
function sendRequest(url){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){

        if(xmlhttp.readyState == 4 && xmlhttp.status ==200){
            var data = JSON.parse(xmlhttp.responseText);
            console.log(data);
            var weather = {};
            weather.temperature= data.main.temp;
            weather.hum = data.main.humidity;
            weather.max = data.main.temp_max;
            weather.min = data.main.temp_min;
            weather.pressure = data.main.pressure;
            weather.speed = data.wind.speed;
            console.log(weather.speed);
            update(weather);
        }

    };

    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}
function update(weather){
    console.log(weather.temperature);

    document.getElementById("avg").innerHTML= `Average temperature is : ${weather.temperature} degrees celsius`;
    document.getElementById("max").innerHTML= `Maximum temperature is : ${weather.max} degrees celsius`;
    document.getElementById("min").innerHTML= `Minimum temperature is : ${weather.min} degrees celsius`;
    document.getElementById("hum").innerHTML= `Humidity is : ${weather.hum} %`;
    document.getElementById("pressure").innerHTML= `Pressure is : ${weather.pressure} mb`;
    document.getElementById("speed").innerHTML= `Wind speeds are : ${weather.speed} mph`;
}
function updateBycity(city){

    var url = "http://api.openweathermap.org/data/2.5/weather?"+
    "q="+city +
    "&APPID="+APPID+
    "&units=metric";
    console.log(url);
    sendRequest(url);
}
window.onload = function (){

    var city;
    

    $("#submitButton").click(function() {

        city = $("#city").val();

        updateBycity(city);
        return false;
    });


}

/*$(document).ready(function() {



});
*/
