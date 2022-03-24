
async function meteo(){
    try{
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=9dc1ac654e99ad5e689b88fde5a5fd33&units=metric") //key : d9eb38796032a8eb1c62b19c226720c8
        let result = await response.json()
        //console.log(result);
        //console.log(result.weather[0].icon)
        console.log(result.name)
        console.log(result.main.temp)
        //let weatherIcon = document.querySelector('#weather-img')
        //console.log(weatherIcon)
        const city = result.name;
        document.getElementById("ville").innerHTML = city;

        const temp = result.main.temp;
        document.getElementById("temperature").innerHTML = temp; 

        const icon = result.weather[0].icon
        document.getElementById("weather-img").setAttribute("src", "http://openweathermap.org/img/w/"+icon+".png")
        //console.log("http://openweathermap.org/img/w/"+icon+".png")
    }catch{
        (error => alert("Erreur : " + error))
    }
}

meteo()