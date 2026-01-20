const memberCards = document.querySelector("#member-cards")
const memeberTableSection = document.querySelector("#table-view")
const memeberTable = document.querySelector("#table-view table tbody")
const modulebtn = document.querySelector("#toggle-view button:first-child")
const listBtn = document.querySelector("#toggle-view button:last-child")

modulebtn.addEventListener("click",()=>{
    memberCards.classList.add("active")
    modulebtn.classList.add("active-btn")
    memeberTableSection.classList.remove("active")
    listBtn.classList.remove("active-btn")

})
listBtn.addEventListener("click",()=>{
    memeberTableSection.classList.add("active")
    listBtn.classList.add("active-btn")
    memberCards.classList.remove("active")
    modulebtn.classList.remove("active-btn")

})

const getMemberData = async ()=>{

    let response = await fetch("data/members.json")
    let data = await response.json()

    displayCards(data.members)
    displayTable(data.members)
}

const displayCards = (memeberdata) =>{
    memeberdata.forEach(element => {
        let card  = document.createElement("div")

        card.setAttribute("class","member-card")

        let cardImage  = document.createElement("img")
        let cardName  = document.createElement("h2")
        let cardAddress  = document.createElement("p")
        let cardWebAdress = document.createElement("a")

        cardImage.setAttribute("src",element.image)
        cardImage.setAttribute("loading","lazy")
        cardImage.setAttribute("alt",element.company_name)
        cardImage.setAttribute("height","200")
        cardImage.setAttribute("width","200")
        cardImage.style.objectFit = "contain"


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

const displayTable = (memberCards) =>{

    


    memberCards.forEach(element =>{
        let newRow = document.createElement("tr")
        let companyName = document.createElement("td")
        let companyAddress = document.createElement("td")
        let companyPhone = document.createElement("td")
        let companyUrl = document.createElement("td")
        let memberLevel = document.createElement("td")

        companyName.textContent = element.company_name
        companyAddress.textContent = element.company_address
        companyPhone.textContent = element.company_phone_number
        companyUrl.textContent = element.url
        memberLevel.textContent = element.member_level

        newRow.appendChild(companyName)
        newRow.appendChild(companyAddress)
        newRow.appendChild(companyPhone)
        newRow.appendChild(companyUrl)
        newRow.appendChild(memberLevel)

        memeberTable.appendChild(newRow)
    })


    


}

getMemberData()
