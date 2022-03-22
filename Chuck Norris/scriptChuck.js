async function chuck(){
    try{
    let response = await fetch("https://api.chucknorris.io/jokes/random")
    let result = await response.json()
    console.log(result.value)
    }
    catch{
    (error) => alert("Erreur" + error)
}
}


//.then(response => console.log(response.text()))
//.then(value => console.log(value))

chuck()


