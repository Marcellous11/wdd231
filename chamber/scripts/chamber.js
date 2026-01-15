const memberCards = document.querySelector("#member-cards")

const getMemberData = async ()=>{

    let response = await fetch("data/members.json")
    let data = await response.json()

    displayCards(data.members)
}

const displayCards = (memeberdata) =>{
    memeberdata.forEach(element => {
        let card  = document.createElement("div")

        card.setAttribute("class","member-card")

        let cardImage  = document.createElement("img")
        let cardName  = document.createElement("h3")
        let cardAddress  = document.createElement("p")
        let cardWebAdress = document.createElement("a")

        cardImage.setAttribute("src",element.image)
        cardImage.setAttribute("loading","lazy")

        cardName.textContent = element.company_name
        cardAddress.textContent = element.company_address
        cardWebAdress.textContent = element.url
        cardWebAdress.setAttribute("href",element.url)

        card.appendChild(cardImage)
        card.appendChild(cardName)
        card.appendChild(cardAddress)
        card.appendChild(cardWebAdress)
        memberCards.appendChild(card)
    });
}

getMemberData()
