const apikey="4c3437953caa026aeffbc90211a27cef";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const Search= document.querySelector(" .search  input");
 const SearchBtn= document.querySelector(" .search Button") ;
 const WeatherIcon=document.querySelector(".weatherIcon");
 const error=document.querySelector(".error p");
 


async function checkWeather(City) {
    const response = await fetch (apiUrl +  City  + `&appid=${apikey}`);


//  when invalid city
if(response.status  === 404){
   document.querySelector(".error").style.display="block";
   document.querySelector(".weather").style.display="none";
    alert("please enter vaild city");

    }

    //valid city 
    else{
        var data = await response.json();
   
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +  "<sup>°C</sup>";
    document.getElementById('humidity').innerHTML = data . main.humidity + "% " ;
    document.querySelector(".Wind").innerHTML = data.wind.speed +" Km/h "  ;
    
  
//  for weather icon 
if (data.weather[0].main == "Clouds") {
WeatherIcon.src ="./img/cloud.png";

}
else if (data.weather[0].main == "Thunderstorm"){
  WeatherIcon.src ="https://cdn-icons-png.flaticon.com/128/1779/1779927.png";
}

else if (data.weather[0].main == "Clear"){
    WeatherIcon.src ="./img/clear.png";
}
else if (data.weather[0].main=="Rain"){
    WeatherIcon.src ="./img/rain.png";
}
else if (data.weather[0].main=="Drizzle"){
    WeatherIcon.src ="./img/drizzle.png";
}
else if (data.weather[0].main=="Mist"){
    WeatherIcon.src ="./img/mist.png";
}

// dispay message when  invalid city name
 document.querySelector(".weather").style.display="block";
 document.querySelector(".error").style.display="none";

    }
   
}
// click search bar 
SearchBtn.addEventListener("click",()=>{

    
    checkWeather(Search.value);
    
}) 

