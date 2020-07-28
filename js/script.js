"use strict"

const introParagraph = document.getElementById("intro")
const headerEl = document.getElementById("page-header")
const gradientBtn = document.getElementById("header-button")

// funtions
function addRandomGradientBg() {
  if (headerEl) {
    const random = Math.floor(gradients.length * Math.random())
    const randomGradient = gradients[random]
    const bgImage = `linear-gradient(to right, ${randomGradient.start}, ${randomGradient.end})`
    headerEl.style.background = bgImage
  }
}

// app
if (introParagraph) {
  introParagraph.textContent = `Voici une collection de ${gradients.length} dégradés prêts à utiliser dans vos feuilles de styles`
}

addRandomGradientBg() // execute la fontion une fois quand le script charge
if (gradientBtn) {
  gradientBtn.addEventListener("click", addRandomGradientBg)
}

console.log("tous les dégradés", gradients)
console.log("tags uniques", uniqueTags)
