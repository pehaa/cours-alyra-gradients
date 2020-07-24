"use strict"

document.body.style.opacity = 0
document.body.style.transition = "1s"

/* setTimeout(callbackFunction, temps en miliseconds) */
setTimeout(() => {
  document.body.style.opacity = 1
}, 1000)

const introCriteres = document.getElementById("intro-criteres")
const criteres = document.querySelectorAll("#liste-criteres li")
if (introCriteres && criteres.length) {
  introCriteres.textContent = `Nous avons préparés ${criteres.length} critères pour faciliter votre choix !`
}

const infoBtn = document.getElementById("info-btn")
if (infoBtn) {
  infoBtn.addEventListener("click", () => {
    alert(
      `Vous êtes sur la page ${document.title} (${document.documentElement.lang}), son addresse url est ${document.URL}`
    )
  })
}

const pub = document.getElementById("pub")
/*pub.addEventListener("click", () => {
  pub.remove()
})
*/

const pubBtn = document.getElementById("pub-btn")
pubBtn.addEventListener("click", () => {
  pub.remove()
})

function generateHeader() {
  const header = document.getElementById("header")
  const colors = ["hotpink", "tomato", "orange"]
  const randomIndexColors = Math.floor(Math.random() * colors.length)

  // avec !important nous devons utiliser setAttribute(name, value)
  header.setAttribute(
    "style",
    `background-color: ${colors[randomIndexColors]}!important`
  )

  const hellos = ["Hello", "Salut", "Hola", "Cześć"]
  const randomIndexHellos = Math.floor(Math.random() * hellos.length)
  const tagline = document.getElementById("tagline")

  tagline.textContent = `${hellos[randomIndexHellos]} 😊`
}

const headerBtn = document.querySelector("#header button")
headerBtn.addEventListener("click", generateHeader)

generateHeader()

const buttons = document.querySelectorAll("button")
for (let btn of buttons) {
  btn.disabled = true
}
