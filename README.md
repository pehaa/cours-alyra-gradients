# Alyra Gradients

1. Insérer l'information
   Voici une collection de ... dégradés prêts à utiliser dans vos feuilles de styles

```javascript
// introEl <- element du dom avec l'id intro
// si introEl existe
//        introEl -> textContent  prend la valeur `Voici une collection de ${gradients.length} ...`
```

Et si on voulait afficher `Voici une collection de <b>${gradients.length}</b> dégradés prêts à utiliser dans vos feuilles de styles` ?

2. Le background de header utilise un des dégradés de l'array `gradients`.
   Ceci change en click.

```javascript
// headerEl <- element du dom avec l'id
function addRandomGradientBg() {
  // executer la suite si headerEl existe
  //     randomIndex <- un nombre aléatoire, valeur entre 0 -> gradients.length - 1
  //     randomGradient <- gradients[randomIndex]
  //     bgImage <- string qui mets en le dégradé en css
  //     headerEl -> style -> backgroundImage prends la valeurs de bgImage
}

addRandomGradientBg() // execute la fontion une fois quand le script charge
switchGradientButton.addEventListener("click", addRandomGradientBg) // execute la fonction en click
```

3. Insérer les dégradés dans la page

Nous allons créer avec JavaScipt une structure html comme ceci :

```html
<ul class="row list-unstyled">
  <li class="col-sm-6 col-md-4 col-lg-3">
    <div class="card p-3 mb-3 shadow">
      <div class="card-gradient rounded-pill mx-auto mb-4" style="..."></div>
      <h2 class="h5 text-center">...</h2>
      <code>...</code>
    </div>
  </li>
</ul>
```

toutes les '...' doivent être remplacés par les valeurs dynamiques

```javascript
// gridEl
function insertGradients() {
  // ulEl <- crée un élément du dom, avec le tag ul
  // parcours les gradients (for of)
  //     crée une structure pour le li
  //     attache li au ulEl
  // attache ulEl à la fin de gridEl
}
```

Méthodes à utiliser :

- `document.createElement()`
- `el.classList.add('class1', 'class2', 'class3')`
- `el.innerHTML`
- `el.appendChild(childEl)`

4.

```javascript
// tagFilter <- variable égale a tag par lequel on va filter
function activateSelectByTag() {
  // selectEl <- élément du dom avec l'id filtertags
  // tags <- liste des tags uniques dans l'order alphabétique
  // parcourir la liste des tags (for of)
  //    crée un élément option
  //    avec le texte qui est égale au tag
  //    avec la valeur de "value" égale au tag
  //    attache l'option à la fin de selectEl
  // selectEl devrait réagir à l'action de utilisateur qui choisi une nouvelle valeur (change)
  // affecter la value d'option choisi par utilisateur à tagFilter
  // réinserer les Gradients
  for (let tag of tags)
    const option = document.createElement("option")
    option.textContent = tag
    option.value = tag
    select.appendChild(option)
  }
  selectEl.addEventListener("change", function (event) {
    tagFilter = event.target.value
    insertGradients()
  })
}
```

5. Refactoring de la function `insertGradients`

```javascript
function insertGradients() {
  // ulEl <- crée un élément du dom, avec le tag ul
  // filteredGradients <- gradients filtrés selon la valeur de tagFilter
  // parcours les filteredGradients  (for of)
  //     crée une structure pour le li
  //     attache li au ulEl
  // vide le gridEl
  // attache ulEl à la fin de gridEl
}
```
