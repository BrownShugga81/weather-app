//console.log("test");
// display curent day
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMM Do"));

var searchBtnEl = document.querySelector("#searchCity");
var inputEl = document.querySelector("#searchInput");



function searchCityApi() {
    var city = inputEl.value;
    var apiEndpoint = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d243b0fe6a40d063276b726c6f2e14e0&units=imperial";

    fetch(apiEndpoint).then(function(response) {
        //console.log(response);
        return response.json();
    }).then(function(data){
    
        //displays current temp
        let temp = data.main.temp

       $('#temp')
       .append(`${temp}` + '°F')
         fiveDays(data);

        //displays current humidity
        let humidity = data.main.humidity

        $("#humidity")
        .append(`${humidity}`)


    })

}


 function fiveDays(data){
     var longitude = data.coord.lon;
//         console.log(longitude);

     var latitude = data.coord.lat;    
//         console.log(latitude);


     var fiveDayApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly&appid=d243b0fe6a40d063276b726c6f2e14e0&units=imperial";

     fetch(fiveDayApi).then(function(response) {
//         console.log(response);
         return response.json();
     }) .then(function(data2){
         console.log(data2);

        // displays current wind speed
        let wind = data2.current.wind_speed

        $('#wind')
        .append(`${wind}` + 'MPH');

        //displays current UV index
        let index = data2.current.uvi

        $('#index')
        .append(`${index}`)

     })
 }
searchBtnEl.addEventListener("click", searchCityApi);