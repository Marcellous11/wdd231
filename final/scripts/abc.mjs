
const abcContainer = document.querySelector("#alphabet")
const alphabet = "abcdefghijklmnopqrstuvwxyz"

for(let i = 0; i< alphabet.length;i++){

    let letter = alphabet[i].toUpperCase()
    let letterLink = document.createElement("a")

    letterLink.setAttribute("href","mealbyabc.html")
    letterLink.textContent  = letter
    abcContainer.appendChild(letterLink)

    letterLink.addEventListener("click",(e)=>{
        localStorage.setItem("searchLetter",letter)
    })

}