//console.log("test");
// display curent day
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMM Do"));

var searchBtnEl = document.querySelector("#searchCity");
var inputEl = document.querySelector("#searchInput");
var pEl = document.querySelector("#currentCityTemp");


function searchCityApi() {
    var city = inputEl.value;
    var apiEndpoint = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d243b0fe6a40d063276b726c6f2e14e0";

    fetch(apiEndpoint).then(function(response) {
        console.log(response);
        return response.json();
    }).then(function(data){
        //console.log(data);
       // console.log(data.main.temp);
        fiveDays(data);
    })
}


function fiveDays(data){
    var longitude = data.coord.lon;
        console.log(longitude);

    var latitude = data.coord.lat;    
        console.log(latitude);


    var fiveDayApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly&appid=d243b0fe6a40d063276b726c6f2e14e0";

    fetch(fiveDayApi).then(function(response) {
        console.log(response);
        return response.json();
    }) .then(function(data2){
        console.log(data2);
    })
}
searchBtnEl.addEventListener("click", searchCityApi);