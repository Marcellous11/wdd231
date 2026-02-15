const navBtn = document.querySelector("#ham-btn")
const navBar = document.querySelector("#nav-bar")
const navOptions = document.querySelectorAll("#nav-bar ul li")
const currentPath = window.location.pathname.split("/").pop()

navBtn.addEventListener("click", ()=>{
    navBtn.classList.toggle("show")
    navBar.classList.toggle("show")
})

navOptions.forEach(li => {
    const link = li.querySelector("a")
    const href = link.getAttribute("href")

    if (href === currentPath) {
        li.classList.add("current")
    }
})

