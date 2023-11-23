function mostrarHome() {
  const home = document.querySelector(".bem-vindo")
  const empresas = document.querySelector(".empresas")
  ocultarSecoes()
  mostrarSecao(home, empresas)
  fecharMenu()
}
function mostrarMeusPets() {
  const secao = document.querySelector(".meus-pets")
  ocultarSecoes()
  mostrarSecao(secao)
  fecharMenu()
}
function mostrarMeusPetsDetalhe() {
  const secao = document.querySelector(".meus-pets-detalhe")
  ocultarSecoes()
  mostrarSecao(secao)
  fecharMenu()
}


function ocultarSecoes() {
  document
  .querySelectorAll(".mostrar")
  .forEach((secao) => secao.classList.remove("mostrar"))
}

function fecharMenu() {
  const menuEOverlay = document.querySelectorAll(
    ".overlay.ativo, .navegacao-menu.mostrar-menu"
    )
    menuEOverlay.forEach((elemento) => {
      elemento.classList.remove("ativo")
      elemento.classList.remove("mostrar-menu")
    })
  }
  function mostrarSecao(secao1, secao2, secao3, secao4, secao5) {
    secao1.classList.add("mostrar")
    secao2 && secao2.classList.add("mostrar")
    secao3 && secao3.classList.add("mostrar")
    secao4 && secao4.classList.add("mostrar")
    secao5 && secao5.classList.add("mostrar")
  }