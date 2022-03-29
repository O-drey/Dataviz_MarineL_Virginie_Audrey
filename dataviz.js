//import { createClient } from 'pexels';
//const client = createClient('563492ad6f91700001000001608e9238674748009498eea15e94bde2');

async function meteo(){
    try{
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=9dc1ac654e99ad5e689b88fde5a5fd33&units=metric") //key : d9eb38796032a8eb1c62b19c226720c8
        let result = await response.json()
        //console.log(result);
        //console.log(result.weather[0].icon)
        //console.log(result.name)
        //console.log(result.main.temp)
        //let weatherIcon = document.querySelector('#weather-img')
        //console.log(weatherIcon)
        const city = result.name;
        document.getElementById("ville").innerHTML = city;

        const temp = result.main.temp;
        document.getElementById("temperature").innerHTML = Math.round(temp) + "°C"; 

        const icon = result.weather[0].icon
        document.getElementById("weather-img").setAttribute("src", "http://openweathermap.org/img/w/"+icon+".png")
        //console.log("http://openweathermap.org/img/w/"+icon+".png")
    }catch{
        (error => alert("Erreur : " + error))
    }
}

//Pexelskey: 563492ad6f91700001000001608e9238674748009498eea15e94bde2//

//chrome.runtime.onMessage.addListener(

async function photo(){
  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  //   });
    fetch("https://api.pexels.com/v1/search?query=weather",{
        headers: {
          Origin : "*", //"https://api.pexels.com/v1/search?query=weather",
          'Content-Type':"image/jpeg",
          Authorization: "563492ad6f91700001000001608e9238674748009498eea15e94bde2",
        }
      })
         .then(resp => {
           return resp.json()
         })
         .then(data => {
           //let i = 0
           const url = data.photos[0].src.original
           //document.getElementById("background-img").setAttribute("src",url)
           document.getElementById("bg").css("background-image",url)//.style.backgroundImage = 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg'
           console.log(data.photos)
         })
        }
//)


meteo()
photo()
