//import { createClient } from 'pexels';
//const client = createClient('563492ad6f91700001000001608e9238674748009498eea15e94bde2');

async function meteo(){
    try{
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=9dc1ac654e99ad5e689b88fde5a5fd33&units=metric") //key : d9eb38796032a8eb1c62b19c226720c8
        let result = await response.json()

        const city = result.name;
        document.getElementById("ville").innerHTML = city;

        const temp = result.main.temp;
        document.getElementById("temperature").innerHTML = Math.round(temp) + "°C"; 

        const icon = result.weather[0].icon
        console.log(icon)
        document.getElementById("weather-img").setAttribute("src", "http://openweathermap.org/img/w/"+icon+".png")
        //console.log("http://openweathermap.org/img/w/"+icon+".png")
    }catch{
        (error => alert("Erreur : " + error))
    }
}

//Pexelskey: 563492ad6f91700001000001608e9238674748009498eea15e94bde2//



async function photo(){
    fetch("https://api.pexels.com/v1/search?query=weather",{
        headers: {
          Origin : "*", 
          'Content-Type':"image/jpeg",
          Authorization: "563492ad6f91700001000001608e9238674748009498eea15e94bde2",
        }
      })
         .then(resp => {
           return resp.json()
         })
         .then(data => {
           const url = data.photos[0].src.landscape
           document.getElementById("background-img").setAttribute("src", url)
           console.log(data.photos)
         })
        }


// //let array = [
//   "01d" = "#FFFF00",
//   "02d" = "#FFFF00",
//   "03d" = "#D3D3D3",
//   "04d" = "#696969",
//   "09d" = "#4682B4",
//   "10d" = "#4682B4",
//   "11d" = "#191970",
//   "13d" = "#FFFAFA",
//   "50d" = "#F5F5F5"
// ]


meteo()
photo()
