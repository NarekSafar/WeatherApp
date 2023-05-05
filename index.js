const apiKey = "0ebaa2b6830c6f69054123f616ffc1f4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        searchBox.style.borderColor = "red";
    } 
    
    else{

        let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `&#8451;`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 

    switch(data.weather[0].main){
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;   
        case "Clear":
            weatherIcon.src = "images/clear.png"; 
            break;    
        case "Rain":
            weatherIcon.src = "images/rain.png";  
            break;   
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;   
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;   
         default:
            console.log("No weather icon available.");
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    searchBox.style.borderColor = "rgb(239, 242, 245)";
}
    }

searchBtn.addEventListener('click' , () => {
    checkWeather(searchBox.value);
})
