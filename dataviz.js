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


async function photo(){
    //let data = {
       // url : "https://api.pexels.com/v1/",
       // headers: {
            //'Authorization' : '563492ad6f91700001000001608e9238674748009498eea15e94bde2'
        //}
    //}




    //fetch("https://api.pexels.com/v1/", {
   // method: 'GET',
    //headers: {
     //   'Authorization' : '563492ad6f91700001000001608e9238674748009498eea15e94bde2' //process.env(API_KEY)
    //}
    //try{
        //let resp = await fetch("https://api.pexels.com/v1/")
       // let resultat = await resp.json()
        //console.log(resultat)
   // }

    //catch(error) {alert("Erreur : " + error)}





    //.then(resp => {
      //  return resp.json()
    //})
    //.then(data => console.log(data))

    


    
console.log(photo)



















const client = createClient('563492ad6f91700001000001608e9238674748009498eea15e94bde2');
let photos = url("https://api.pexels.com/v1/")
const query = 'Weather';

client.photos.search({ query, per_page: 1 })
    .then(photos => 
        {
            photos.json()
    })
    .then(data => 
        console.log(data))
    .catch(err => console.log("error",err.message))

    }
























meteo()
photo()
