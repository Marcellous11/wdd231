import { populateCurrentWeather,populateForecast } from "./weathertools.mjs"


const openWeatherAppAPI= "04b18fffde41ff9f8664cab9833c2028"

let lat = 33.10838842459419
let lon =  -96.83877621652161
const BASE_URL = "https://api.openweathermap.org/data/2.5"

let currentWeatherUrl = `${BASE_URL}/weather?units=imperial&lat=${lat}&lon=${lon}&appid=${openWeatherAppAPI}`

let forecastUrl = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherAppAPI}`

const apiFetch = async(url) =>{
    try{
        let res = await fetch(url);

        if(!res.ok){
            throw Error(await res.text())
        }

        const data =  await res.json();
        console.log("Success",url)
        // console.log(data)
        return data
        
    }catch(e){
        console.error("Failed",url,e);
        return null
    }
}

const displayCurrentWeather = async() =>{
    const data = await apiFetch(currentWeatherUrl)
    if (data) populateCurrentWeather(data)
}

const displayForecast = async () =>{
    const data = await apiFetch(forecastUrl)
    if(data) populateForecast(data);
}

displayCurrentWeather()
displayForecast()
