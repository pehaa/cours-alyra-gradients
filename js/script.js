"use strict"

const validGradients = gradients.filter(
  (el) => "start" in el && "end" in el && el.start !== el.end
)
let tagFilter = "toutes les couleurs"
const introParagraph = document.getElementById("intro")
const insertElements = document.getElementById("insert")
const header = document.querySelector("header")

const button = document.querySelector("button")

const uniqueTags = function (arrayWithTags) {
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

if (introParagraph) {
  introParagraph.textContent = `Voici une collection de ${validGradients.length} dégradés prêts à utiliser dans vos feuilles de styles`
}

const createLi = (el) => {
  const li = document.createElement("li")
  li.classList.add("col-md-3")
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

const insertTags = function () {
  const ulEl = document.createElement("ul")
  ulEl.classList.add("row", "list-unstyled")
  const arrayOfGradients = validGradients.filter((el) => {
    if (tagFilter === "toutes les couleurs") {
      return true
    }
    return el.tags.includes(tagFilter)
  })
  for (let gradient of arrayOfGradients) {
    const li = createLi(gradient)
    ulEl.appendChild(li)
  }
  insert.innerHTML = ""
  insert.appendChild(ulEl)
}
changeHeaderBg()
insertTags(validGradients)

function changeHeaderBg() {
  const random = Math.floor(validGradients.length * Math.random())
  const randomGradient = validGradients[random]
  const bgStyle = `background-image: linear-gradient(to right, ${randomGradient.start}, ${randomGradient.end});`
  header.setAttribute("style", bgStyle)
}

button.addEventListener("click", changeHeaderBg)

addSelectByTag()

function addSelectByTag() {
  const select = document.querySelector("#filtertags")
  const tags = uniqueTags(validGradients)
  for (let tag of tags) {
    const option = document.createElement("option")
    option.textContent = tag
    option.setAttribute("value", tag)
    select.appendChild(option)
  }
  select.addEventListener("change", function (event) {
    tagFilter = event.target.value
    insertTags(validGradients)
  })
}
