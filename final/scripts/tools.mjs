export const foodAPI = async (searchFilter,argument) =>{
    const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?"
    const URL = `${BASE_URL}${searchFilter}=${argument}`

    const res = await fetch(URL)
    const data = await res.json();
    return data

}

export const displayCards = async (localDataStr,mealContainer) =>{
    mealContainer.innerHTML = ""

    const localData = JSON.parse(localDataStr)
    if(localData.meals){

        localData.meals.forEach(meal => {
        const container = document.createElement("div")
        const title = document.createElement("h3")
        const img = document.createElement("img")
        const description = document.createElement("p")
        const dialog = document.createElement("dialog")
        const dialogExit = document.createElement("button")
        
        container.classList.add("mealCard")
        title.textContent = meal.strMeal
        img.setAttribute("src",meal.strMealThumb)
        img.classList.add("foodImage")

        description.innerText =`Instructions:\n\n ${meal.strInstructions}`
        dialogExit.textContent = "X"
        dialog.appendChild(dialogExit)
        dialog.appendChild(description)
        
        container.appendChild(title)
        container.appendChild(img)
        container.appendChild(dialog)

        mealContainer.append(container)
    
        img.addEventListener("click", ()=>{
            dialog.showModal()
        })
        dialogExit.addEventListener("click",()=>{
            dialog.close()
        })

    });
    }else{
        mealContainer.textContent = "No results found"
    }
}
