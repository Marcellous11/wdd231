const tempElement = document.querySelector("#current-temp")
const weathericon = document.querySelector("#weather-icon")

const caption = document.querySelector("figcaption")
const API_key= bba770124a05968a576c717c4877dbc8

let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`