const tempElement = document.querySelector("#current-temp")
const weathericon = document.querySelector("#weather-icon")
const caption = document.querySelector("figcaption")

const API_key= "bba770124a05968a576c717c4877dbc8"

let lat = 33.10838842459419
let lon =  -96.83877621652161
let url = `https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${API_key}`

const apiFetch = async() =>{
    let res = await fetch(url);
    try{
        if(res.ok){
            let data =  await res.json();
            console.log(data);
            displayResults(data)
        }else{
            throw Error(await res.text())
        }

    }catch(e){
        console.log(e);
    }
}


const displayResults = (data) =>{

    let temp = data.main.temp
    let tempDescription = data.weather[0].description
    let imgUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`

    tempElement.textContent = temp
    weathericon.setAttribute("src",imgUrl)


    caption.textContent = tempDescription

}

apiFetch()