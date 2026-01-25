export function populateCurrentWeather(data){

    const tempElement = document.querySelector("#current-temp")
    const weathericon = document.querySelector("#weather-icon")
    const conditionsEl = document.querySelector("#conditions")
    const highsEl = document.querySelector("#highs")
    const lowsEl = document.querySelector("#lows")
    const humidityEl = document.querySelector("#humidity")
    const sunriseEl = document.querySelector("#sunrise")
    const sunseteEl = document.querySelector("#sunset")
    const caption = document.querySelector("figcaption")

    let temp = data.main.temp
    let conditions = data.weather[0].description
    let imgUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let highs = data.main.temp_max
    let lows = data.main.temp_min
    let humidity =data.main.humidity
    let sunrise = data.sys.sunrise
    let sunset  = data.sys.sunset

    let convertSunRise = new Date(sunrise * 1000)
    let currentSunRise = convertSunRise.toLocaleString("en-US",{
        timeZone:"America/Chicago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
    let convertsunset = new Date(sunset * 1000)
    let currentSunSet = convertsunset.toLocaleString("en-US",{
        timeZone:"America/Chicago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })

    
    tempElement.textContent = `${temp}° F`
    weathericon.setAttribute("src",imgUrl)
    conditionsEl.textContent = conditions
    highsEl.textContent = `Highs: ${highs}°`
    lowsEl.textContent = `Lows: ${lows}°`
    humidityEl.textContent = `Humidity: ${humidity}%`
    sunriseEl.textContent = `Sunrise: ${currentSunRise} Central`
    sunseteEl.textContent = `Sunset: ${currentSunSet} Central`
}

export function populateForecast(data){
    let forecasatGroup = document.querySelector("#forecast-group")

    let today = document.createElement("span")


    const threeDayForecst = data.list.filter((_,i) => i % 8 === 0)
    console.log(threeDayForecst)

    console.log(threeDayForecst.forEach(day=>{
        let todayData = document.createElement("span")
        let todayLine = document.createElement("p")
        let tomorrowData = document.createElement("span")
        let tomorrowLine = document.createElement("p")
        let dayAfterTomorrowData = document.createElement("span")
        let dayAfterTomorrowLine = document.createElement("p")

        let currentDay = new Date(day.dt * 1000)
        console.log(day)
        let currentDayFormated = currentDay.toLocaleString("en-US",{
        timeZone:"America/Chicago",
        weekday:"long"
        })


        todayLine.textContent = currentDayFormated
        todayData.textContent =    `: ${day.main.temp}°F`
        todayLine.appendChild(todayData)

        forecasatGroup.appendChild(todayLine);

    }))
}