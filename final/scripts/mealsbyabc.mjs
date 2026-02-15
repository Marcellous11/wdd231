import { foodAPI } from "./tools.mjs"
import { displayCards } from "./tools.mjs"

const mealContainer = document.querySelector("#mealsList")
let searchLetter = localStorage.getItem("searchLetter")



const GetMealDisplay = async ()  =>{
    let mealData = await foodAPI("f",searchLetter)
    const mealDataStr = JSON.stringify(mealData)
    displayCards(mealDataStr,mealContainer)
}


GetMealDisplay()