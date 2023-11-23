const iconeUsuario = document.querySelector(".icone-usuario")
const menuOsso = document.querySelector(".menu-osso")

iconeUsuario.addEventListener("click", () => {
  iconeUsuario.classList.toggle("ativo")
  menuOsso.classList.toggle("ativo")
})
