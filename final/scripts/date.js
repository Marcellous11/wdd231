const currentYear = document.querySelector("#currentyear")
const lastMod = document.querySelector("#lastmod")

const date = new Date()


currentYear.innerHTML = date.getFullYear()
lastMod.innerHTML = `Last Modified ${document.lastModified}`