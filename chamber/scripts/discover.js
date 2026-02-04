import { places } from "./places.mjs";
const placesSection = document.querySelector("#places")
const usermessage = document.querySelector("#usermessage")

usermessage.textContent = "hello marcellous"


const previousVisit = localStorage.getItem("previousVisit")
const currnetVisit = Date.now()
localStorage.setItem("previousVisit", currnetVisit)
const diffDays = (previousVisit - Number(currnetVisit))/86400000

const numVisited = parseInt(localStorage.getItem("numVisited") )
localStorage.setItem("numVisited" ,parseInt( numVisited) + 1)


if(numVisited < 1 ){
    usermessage.textContent =  "Welcome! Let us know if you have any questions."
}else if(diffDays < 1){
     usermessage.textContent =  "Back so soon! Awesome!"
}else{
    usermessage.textContent =  `You last visited ${diffDays} days ago.`
}


places.forEach(place =>{
    const card = document.createElement("div")
    const title = document.createElement('h2')
    const img = document.createElement('img')
    const description= document.createElement('p')
    const address= document.createElement('span')

    title.textContent = place.title
    img.setAttribute("src",place.image)
    description.textContent = place.description
    address.textContent = place.address

    card.classList.add("discoveryCard")

    card.appendChild(title)
    card.appendChild(img)
    card.appendChild(description)
    card.appendChild(address)

    placesSection.appendChild(card)

})

