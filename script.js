//weather application



//my api key
const apiKey ="******************************";
//weather api url
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="; 

//selectors
const searchBox =document.querySelector("#city-input");
const searchBtn =document.querySelector("#search-btn");
const weatherIcon=document.querySelector(".weather-icon");

//function
async function checkWeather(city){
    try{
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        // console.log(response);
        var data = await response.json();
        console.log(data);
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector("#humidity").innerHTML=data.main.humidity +"%";
        document.querySelector("#wind").innerHTML=data.wind.speed + "Km/h";

        if(data.weather[0].main =="Clouds"){
            weatherIcon.src="assets/clouds.png";
        }else if(data.weather[0].main =="Clear"){
            weatherIcon.src="assets/clear.png";
        }else if(data.weather[0].main =="Rain"){
            weatherIcon.src="assets/rain.png";
        }else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="assets/default.png";
        }else if(data.weather[0].main=="Humidity"){
            weatherIcon.src="assets/humidity.png";
        }else if(data.weather[0].main=="Mist"){
            weatherIcon.src="assets/mist.png";
        }else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="assets/default.png";
        }else if(data.weather[0].main=="Wind"){
            weatherIcon.src="assets/wind.png";
        }else if(data.weather[0].main=="Haze"){
            weatherIcon.src="assets/mist.png";
        };
        document.querySelector(".weather").style.display="block";

    }catch(error){
        console.error("Error fetching weather data: ", error);
    }
};


searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value);
});
