"use strict"

const introParagraph = document.getElementById("intro")
const headerEl = document.getElementById("page-header")
const gradientBtn = document.getElementById("header-button")
let filterTag = "toutes les couleurs"

function addRandomGradientBg() {
  if (headerEl) {
    const random = Math.floor(gradients.length * Math.random())
    const randomGradient = gradients[random]
    const bgImage = `linear-gradient(90deg, ${randomGradient.start}, ${randomGradient.end})`
    headerEl.style.backgroundImage = bgImage
  }
}

if (introParagraph) {
  introParagraph.textContent = `Voici une collection de ${gradients.length} dégradés prêts à utiliser dans vos feuilles de styles`
}

addRandomGradientBg() // execute la fontion une fois quand le script charge
if (gradientBtn) {
  gradientBtn.addEventListener("click", addRandomGradientBg)
}

console.log("tous les dégradés", gradients)
console.log("tags uniques", uniqueTags)

function insertGradients() {
  const ulEl = document.createElement("ul")
  const gridContainer = document.getElementById("grid-container")
  ulEl.classList.add("row", "list-unstyled")
  const filteredGradients = gradients.filter((el) => {
    // on utilise ici filterTag
    if (filterTag === "toutes les couleurs") {
      return true
    } else {
      return el.tags.includes(filterTag)
    }
  })
  for (let gradient of filteredGradients) {
    const li = document.createElement("li")
    li.classList.add("col-sm-6", "col-md-4", "col-lg-3")
    const gradientCode = `background-image: linear-gradient(90deg, ${gradient.start}, ${gradient.end});`
    li.innerHTML = `<div class="card p-3 mb-4 shadow">
      <div class="card-gradient rounded-pill mx-auto mb-4" style="${gradientCode}"></div>
      <h2 class="h5 text-center">${gradient.name}</h2>
      <code>${gradientCode}</code>
    </div>`
    ulEl.append(li)
  }
  // remettre grid Container à zéro -> div vide
  gridContainer.innerHTML = ""
  gridContainer.append(ulEl)
}

insertGradients()

function activateFilterByTag() {
  // reperer select
  // boucle pour parcourir uniqueTags
  const selectEl = document.getElementById("filtertags")
  // trier uniqueTags dans l'ordre alphabetique
  uniqueTags.sort()
  console.log(uniqueTags)
  console.log(selectEl)
  for (let tag of uniqueTags) {
    const option = document.createElement("option")
    option.textContent = tag
    option.value = tag
    console.log(option)
    selectEl.append(option)
  }
  selectEl.addEventListener("change", () => {
    console.dir(selectEl)
    filterTag = selectEl.value
    insertGradients()
    console.log(filterTag)
  })
}

activateFilterByTag()
