const apiKey = "e4bc516be0e3c43666fdf3f455e683ce";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=pl&lang=en&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon")

const card = document.querySelector(".card");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".card").style.background = "linear-gradient(135deg, red, #220022)"
    }else{
       document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"&deg;C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
        card.style.background = "linear-gradient(135deg, rgba(217,228,221,1) 2%, rgba(78,134,145,1) 77%)";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
        card.style.background = "linear-gradient(135deg, rgba(129,235,245,1) 25%, rgba(8,114,218,1) 93%)";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
        card.style.background = "linear-gradient(135deg, rgba(157,157,157,1) 25%, rgba(41,98,154,1) 61%, rgba(8,114,218,1) 93%)";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png" 
        card.style.background = "linear-gradient(135deg, rgba(157,157,157,1) 25%, rgba(41,98,154,1) 61%, rgba(8,114,218,1) 93%)";
    } 
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
        card.style.background = "linear-gradient(135deg, rgba(157,157,157,1) 25%, rgba(41,98,154,1) 61%, rgba(8,114,218,1) 93%)";
    }
        
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});


