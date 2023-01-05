function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const image = document.querySelector("#profile img")
  const txt = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/Avatar-light.png")
    txt.setAttribute("alt", "foto eu editada")
  } else {
    image.setAttribute("src", "./assets/Avatar.png")
    txt.setAttribute("alt", "foto eu original")
  }
}
