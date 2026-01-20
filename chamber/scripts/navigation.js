const navBtn = document.querySelector("#ham-btn")
const navBar = document.querySelector("#nav-bar")
const navBtns = document.querySelectorAll("#nav-bar ul li")

navBtn.addEventListener("click", ()=>{
    navBtn.classList.toggle("show")
    navBar.classList.toggle("show")
})

navBtns.forEach(element => {
    element.addEventListener("click",(e)=>{
        localStorage.setItem("activeNav",e.target.textContent)
    })
});

const activeBtn = localStorage.getItem("activeNav")

navBtns.forEach(element => {

    if(element.textContent === activeBtn ){
        element.classList.add("current")
    }
});


