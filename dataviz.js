//import { createClient } from 'pexels';
//const client = createClient('563492ad6f91700001000001608e9238674748009498eea15e94bde2');
let interval = setInterval(photo,[3600000])

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

        let array = {
          "01d" : "ffff00",
          "02d" : "ffff00",
          "03d" : "d3d3d3",
          "04d" : "696969",
          "09d" : "4682b4",
          "10d" : "4682b4",
          "11d" : "191970",
          "13d" : "fffafa",
          "50d" : "f5f5f5"
        }
        
        let colorPhoto = array[icon]
        console.log(array[icon])
        return colorPhoto

    }catch{
        (error => alert("Erreur : " + error))
    }
    
}

//Pexelskey: 563492ad6f91700001000001608e9238674748009498eea15e94bde2//



async function photo(){
    fetch("https://api.pexels.com/v1/search?query=weather&per_page=80&color=" + resultat , {
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
           var num = Math.floor(Math.random() * 81);
           const url = data.photos[num].src.landscape
           document.getElementById("background-img").setAttribute("src", url)
           console.log(data.photos)
         })
        }



let resultat = meteo()
photo(resultat)
