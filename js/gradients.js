const gradients = [
  {
    name: "Grade Grey",
    start: "rgb(189, 195, 199)",
    end: "rgb(44, 62, 80)",
    tags: ["gris"],
  },
  {
    name: "Harvey",
    start: "rgb(31, 64, 55)",
    end: "rgb(153, 242, 200)",
    tags: ["vert"],
  },
  {
    name: "Rainbow Blue",
    start: "rgb(0, 242, 96)",
    end: "rgb(5, 117, 230)",
    tags: ["vert", "bleu"],
  },
  {
    name: "Slight Ocean View",
    start: "rgb(168, 192, 255)",
    end: "rgb(63, 43, 150)",
    tags: ["bleu", "violet"],
  },
  {
    name: "Crystal Clear",
    start: "rgb(21, 153, 87)",
    end: "rgb(21, 87, 153)",
    tags: ["bleu", "vert"],
  },
  {
    name: "Piggy Pink",
    start: "rgb(238, 156, 167)",
    end: "rgb(255, 221, 225)",
    tags: ["rose"],
  },
  {
    name: "Citrus Peel",
    start: "rgb(253, 200, 48)",
    end: "rgb(243, 115, 53)",
    tags: ["jaune", "orange"],
  },
  {
    name: "Ibiza Sunset",
    start: "rgb(238, 9, 121)",
    end: "rgb(255, 106, 0)",
    tags: ["fuchsia", "rose", "orange"],
  },
  {
    name: "Fun Fun",
    start: "rgb(0, 195, 255)",
    end: "rgb(255, 255, 28)",
    tags: ["bleu", "vert", "jaune"],
  },
  {
    name: "Cosmic Fusion",
    start: "rgb(255, 0, 204)",
    end: "rgb(51, 51, 153)",
    tags: ["fuchsia", "violet"],
  },
  {
    name: "Sunrise",
    start: "rgb(255, 126, 95)",
    end: "rgb(254, 180, 123)",
    tags: ["orange"],
  },
  {
    name: "Sun on the Horizon",
    start: "rgb(252, 234, 187)",
    end: "rgb(248, 181, 0)",
    tags: ["jaune"],
  },
  {
    name: "Sunset",
    start: "rgb(11, 72, 107)",
    end: "rgb(245, 98, 23)",
    tags: ["orange"],
  },
  {
    name: "Cherryblossoms",
    start: "rgb(251, 211, 233)",
    end: "rgb(187, 55, 125)",
    tags: ["rose"],
  },
  {
    name: "Joomla",
    start: "rgb(30, 60, 114)",
    end: "rgb(42, 82, 152)",
    tags: ["bleu"],
  },
  {
    name: "Little Leaf",
    start: "rgb(118, 184, 82)",
    end: "rgb(141, 194, 111)",
    tags: ["vert"],
  },
  {
    name: "Curiosity blue",
    start: "rgb(82, 82, 82)",
    end: "rgb(61, 114, 180)",
    tags: ["bleu", "gris"],
  },
  {
    name: "Twitch",
    start: "rgb(100, 65, 165)",
    end: "rgb(42, 8, 69)",
    tags: ["violet"],
  },
  {
    name: "Nepal",
    start: "rgb(222, 97, 97)",
    end: "rgb(38, 87, 235)",
    tags: ["mauve", "violet", "bleu"],
  },
  {
    name: "Dance To Forget",
    start: "rgb(255, 78, 80)",
    end: "rgb(249, 212, 35)",
    tags: ["orange", "jaune"],
  },
  {
    name: "Moonrise",
    start: "rgb(218, 226, 248)",
    end: "rgb(214, 164, 164)",
    tags: ["gris", "rose"],
  },
  {
    name: "YouTube",
    start: "rgb(229, 45, 39) ",
    end: "rgb(179, 18, 23)",
    tags: ["rouge"],
  },
  {
    name: "Green Beach",
    start: "rgb(2, 170, 176)",
    end: "rgb(0, 205, 172)",
    tags: ["bleu", "vert"],
  },
  {
    name: "Purple Love",
    start: "rgb(204, 43, 94)",
    end: "rgb(117, 58, 136)",
    tags: ["rose", "mauve"],
  },
  {
    name: "Harmonic Energy",
    start: "rgb(22, 160, 133)",
    end: "rgb(244, 208, 63)",
    tags: ["vert", "jaune"],
  },
]

function allTags(list) {
  /* retourner la liste des tags uniques */
  let listTotal = []
  for (let element of list) {
    if ("tags" in element) {
      listTotal = listTotal.concat(element.tags)
    }
  }
  const listTagsUnique = []
  listTotal.forEach((el) => {
    if (!listTagsUnique.includes(el)) {
      //listTagsUnique = listTagsUnique.concat([el])
      listTagsUnique.push(el)
    }
  })
  return listTagsUnique
}

const uniqueTags = allTags(gradients)
