const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

const cards = document.querySelector('#cards');


const getProphetData = async() =>{

    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    displayProphets(data.prophets)
}

const displayProphets = (prophets) =>{

    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let dateOfBirth = document.createElement("p")
        let placeOfBirth = document.createElement("p")
        let portrait = document.createElement("img");

        let fullNameStr =  `${prophet.name} ${prophet.lastname}`
        fullName.textContent = fullNameStr

        portrait.setAttribute("src",prophet.imageurl)
        portrait.setAttribute("alt",`Image of ${fullNameStr}, LDS Prophet`)
        portrait.setAttribute("loading","lazy")
        portrait.setAttribute("width",200)
        portrait.setAttribute("height",'auto')

        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`

        card.appendChild(fullName)
        card.appendChild(dateOfBirth)
        card.appendChild(placeOfBirth)
        card.appendChild(portrait)

        cards.appendChild(card)
    });
}
getProphetData()