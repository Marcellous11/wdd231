import { foodAPI } from "./tools.mjs";
import { displayCards } from "./tools.mjs";
const searchForm = document.querySelector("form")
const searchInput = document.querySelector("#search")
const searchBtn = document.querySelector("input[type='submit']")
const mealCollection = document.querySelector("#display-meals")
const localDataStr = localStorage.getItem("foodData")




searchBtn.addEventListener("click", async (e)=>{
    e.preventDefault()
    const dataForm = new FormData(searchForm)
    const searchTerm = dataForm.get("search")
    searchInput.value = ""
    
    const foodData = await foodAPI("s",searchTerm)
    localStorage.setItem("foodData", JSON.stringify(foodData))
    const localDataStr = localStorage.getItem("foodData")

    displayCards(localDataStr,mealCollection)
})


window.addEventListener("load",()=>{
    mealCollection.textContent = ""
    displayCards(localDataStr,mealCollection)
})


