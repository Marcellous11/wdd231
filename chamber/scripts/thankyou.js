const thanksContainer = document.querySelector("#thankyou")
const userDataList = document.querySelector("#responselist")

const params = new URLSearchParams(window.location.search)


console.log(params.toString())



for(const [key,value] of params){
    const keyValue = document.createElement("dt")
    const valueOfKey = document.createElement("dd")
    let displayValue = value

    if(!displayValue){
        displayValue = "---------------"
    }
    if(key === "firstName"){
        keyValue.textContent = "First Name"
        valueOfKey.textContent = displayValue
    }else if(key === "lastName"){
        keyValue.textContent = "Last Name"
        valueOfKey.textContent = displayValue
    }else if(key ==="email"){
        keyValue.textContent = "Email"
        valueOfKey.textContent = displayValue    
    }else if(key ==="tel"){
        keyValue.textContent = "Phone Number"
        valueOfKey.textContent = displayValue
    }else if(key === "organizationTitle"){
        keyValue.textContent = "Title Organization"
        valueOfKey.textContent = displayValue
    }else if(key ==="memberLevel"){
        keyValue.textContent = "Member Level"
        valueOfKey.textContent = displayValue
    }else if(key === "description") {
        keyValue.textContent = "Description"
        valueOfKey.textContent = displayValue
    }

    console.log(key)
    userDataList.appendChild(keyValue)
    userDataList.appendChild(valueOfKey)

   


}