//console.log("test");
// display curent day
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMM Do"));

var searchBtnEl = document.querySelector("#searchCity");
var inputEl = document.querySelector("#searchInput");

function searchCityApi() {
    var city = inputEl.value;
    var apiEndpoint = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=d243b0fe6a40d063276b726c6f2e14e0";

    fetch(apiEndpoint).then(function(response) {
        console.log(response);
        //return response.json();
    })
}

searchBtnEl.addEventListener("click", searchCityApi);