const apiKey = "cf069de3f470ec36e9ab7645820fcff1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button"); 
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeahter(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humedad").innerHTML = data.main.humidity + "%";
        document.querySelector(".viento").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "img/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchButton.addEventListener("click", ()=>{
    checkWeahter(searchBox.value);
})
;