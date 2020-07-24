"use strict"

// variables

/*
introParagraph <- element du document avec l'id intro
gridContainer <- element du document avec l'id grid-container
pageHeader -> element du document avec l'id header
switchGradientButton -> element du document avec l'id header-button
*/

const introParagraph = document.getElementById("intro")
const gridContainer = document.getElementById("grid-container")
const pageHeader = document.getElementById("header")
const switchGradientButton = document.getElementById("header-button")
let tagFilter = "toutes les couleurs"

// functions

function getUniqueTags(arrayWithTags) {
  const tags = []
  for (let gradient of arrayWithTags) {
    for (let tag of gradient.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    }
  }
  return tags
}

function createLi(el) {
  const li = document.createElement("li")
  li.classList.add("col-lg-3", "col-md-4", "col-sm-6")
  const bgStyle = `background-image:
  linear-gradient(to right, ${el.start}, ${el.end});`
  li.innerHTML = `
  <div class="card p-3 mb-3 shadow">
    <div class="card-gradient rounded-pill mx-auto mb-4" style="${bgStyle}"></div>
    <h2 class="h5 text-center">${el.name}</h2>
    <code ><pre class="py-3">${bgStyle}</pre></code>
  </div>`
  return li
}

function insertGradients(gradients) {
  const ulElement = document.createElement("ul")
  ulElement.classList.add("row", "list-unstyled")
  const filteredGradients = gradients.filter((el) => {
    if (tagFilter === "toutes les couleurs") {
      return true
    }
    return el.tags.includes(tagFilter)
  })
  for (let gradient of filteredGradients) {
    const li = createLi(gradient)
    ulElement.appendChild(li)
  }
  gridContainer.innerHTML = ""
  gridContainer.appendChild(ulElement)
}

function generateHeaderBg() {
  const random = Math.floor(gradients.length * Math.random())
  const randomGradient = gradients[random]
  const bgStyle = `background-image: linear-gradient(to right, ${randomGradient.start}, ${randomGradient.end});`
  pageHeader.style = bgStyle
}

function activateSelectByTag() {
  const select = document.querySelector("#filtertags")
  const tags = getUniqueTags(gradients).sort()
  for (let tag of tags) {
    const option = document.createElement("option")
    option.textContent = tag
    option.value = tag
    select.appendChild(option)
  }
  select.addEventListener("change", function (event) {
    tagFilter = event.target.value
    insertGradients(gradients)
  })
}

// app

/* inserer l'information : Voici une collection de ... dégradés prêts à utiliser dans vos feuilles de styles */
if (introParagraph) {
  introParagraph.textContent = `Voici une collection de ${gradients.length} dégradés prêts à utiliser dans vos feuilles de styles`
}
/* choisir un dégradé (random) et l'appliquer en tant que background image dans
l'élément header */
generateHeaderBg()
/* click sur le bouton change le dégradé dans le header */
if (switchGradientButton) {
  switchGradientButton.addEventListener("click", generateHeaderBg)
}
/* inserer la grille des dégradés */
insertGradients(gradients)
/* activer le select by tag */
activateSelectByTag()
