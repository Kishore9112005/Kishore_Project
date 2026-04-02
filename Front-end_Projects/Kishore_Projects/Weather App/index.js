const Weather = document.querySelector(".WeatherForm");
const cityName = document.querySelector(".CityName");
const Card = document.querySelector(".Card");
const apiKey = "bd2c417b07cd4b0e22fa164c53790416";
Weather.addEventListener("submit", async event =>{
event.preventDefault();
    const location = cityName.value;

    if(location){
        try{
            const weatherData = await getWeather(location);
            displayWeather(weatherData);
        }
        catch(error){
           console.error("Error fetching weather data:", error);
            displayError("An error occurred while fetching weather data. Please try again later.");
        }
    }
    else{
        displayError("Please enter a city name");
    }
});

async function getWeather(location){
const Url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
const response = await fetch(Url);
console.log(response);
if(!response.ok){
    throw new Error("Network response was not ok");
}
    return await response.json();
 
}


function displayWeather(data){
const{name:city, main:{temp, humidity}, weather:[{description}]} = data;
Card.textContent = "";
Card.style.display="flex";
const cityElement = document.createElement("h1");
cityElement.textContent = city;
Card.appendChild(cityElement);
const tempElement = document.createElement("p");
tempElement.textContent = `Temperature: ${temp} °C`;
tempElement.classList.add("DispTemp");
Card.appendChild(tempElement);
const humidityElement = document.createElement("p");
humidityElement.textContent = `Humidity: ${humidity}%`;
Card.appendChild(humidityElement);
const descriptionElement = document.createElement("p");
descriptionElement.textContent = `Description: ${description}`;
Card.appendChild(descriptionElement);
const WeatherIcon = document.createElement("img");
WeatherIcon.classList.add("DispSymbol");
WeatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
WeatherIcon.alt = description;
Card.appendChild(WeatherIcon);
}
displayWeather();

function displayError(error){
const errorMessage = document.createElement("p");
errorMessage.textContent = error;
errorMessage.classList.add("DispError");
Card.textContent = "";
Card.style.display="flex";
Card.appendChild(errorMessage);
errorMessage.textContent = error;    
}
