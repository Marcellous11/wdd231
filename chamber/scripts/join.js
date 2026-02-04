const learnMoreBtn = document.querySelectorAll(".memberlevelbox button")


memberLevels = {
    "Non Profit Membership":{
        "Membership Price":0,
        "Special Events Tickets":1,
        "Training Tickets":1,
        "Advertisements Lots":1
    },
    "Bronze Membership":{
        "Membership Price":50,
        "Special Events Tickets":3,
        "Training Tickets":5,
        "Advertisements Lots":3
    },
    "Silver Membership":{
        "Membership Price":150,
        "Special Events Tickets":6,
        "Training Tickets":10,
        "Advertisements Lots":6
    },
    "Gold Membership":{
        "Membership Price":200,
        "Special Events Tickets":12,
        "Training Tickets":20,
        "Advertisements Lots":9
    },
}
const dialog = document.querySelector("dialog")
const title = document.querySelector("dialog h4")
const displaydata = document.querySelector("dialog dl")
const closeBtn =document.querySelector("#closeDialog")

closeBtn.addEventListener("click",(e)=>{
    dialog.close();
})

learnMoreBtn.forEach(btn =>{
    btn.addEventListener("click",(e)=>{
        displaydata.innerHTML = ""
        let memberLevel = e.target.previousElementSibling.textContent

        title.textContent = memberLevel

        for (const key in memberLevels[memberLevel]) {
            const label = document.createElement("dt")
            const datapoint = document.createElement("dd")

            label.textContent = key
            if(key === "Membership Price"){
                datapoint.textContent = `$${memberLevels[memberLevel][key]}`
            }else{
                datapoint.textContent = memberLevels[memberLevel][key]
            }

            displaydata.appendChild(label)
            displaydata.appendChild(datapoint)
        }

        dialog.showModal()
        console.log()
    })
})


