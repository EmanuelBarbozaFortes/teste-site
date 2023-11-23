const iconeFechar = document.querySelector(".icone-fechar")
const iconeMenu = document.querySelector(".icone-menu")
const menu = document.querySelector(".navegacao-menu")
const itensMenu = document.querySelectorAll(".link-nav")
const overlay = document.querySelector(".overlay")

function abrirEFecharMenu() {
  menu.classList.toggle("mostrar-menu")
  adicionarERemoverOverlay()
}
function girarSetaEAbrirSubMenu(item) {
  const proximoItem = item.nextElementSibling
  if (proximoItem) {
    item.classList.toggle("girar-seta")
    item.nextElementSibling.classList.toggle("aberto")
  }
}
function adicionarSetaSeHouverSubMenu(item) {
  const proximoItem = item.nextElementSibling
  if (proximoItem) {
    item.classList.toggle("seta-icone")
  }
}
function adicionarERemoverOverlay() {
  overlay.classList.toggle("ativo")
}

iconeMenu.addEventListener("click", abrirEFecharMenu)
iconeFechar.addEventListener("click", abrirEFecharMenu)
overlay.addEventListener("click", abrirEFecharMenu)

itensMenu.forEach((item) => {
  item.addEventListener("click", () => {
    girarSetaEAbrirSubMenu(item)
  })

  adicionarSetaSeHouverSubMenu(item)
})
