const featuredMembers = document.querySelector("#featuredMembers");



const getMemberData = async ()=>{
    
    let response = await fetch("data/members.json")
    let data = await response.json()
    
    buildCards(data.members)
}

const buildCards = async (data) =>{

    data.forEach(member=>{
        const memberCard = document.createElement("div");
        const title = document.createElement("h3");
        const rating = document.createElement("span");
        const image = document.createElement("img");
        const ul = document.createElement("ul");
        const emailList = document.createElement("li");
        const phoneList = document.createElement("li");
        const url = document.createElement("li");

        title.textContent = member.company_name
        rating.textContent = "✯"*member.member_level
    })


}
getMemberData();