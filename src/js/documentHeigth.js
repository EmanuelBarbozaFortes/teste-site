function setElementHeight() {
  const vh = window.innerHeight
  document.body.style.height = `${vh}px`
}

// Atualiza a altura do elemento ao carregar a página e quando houver redimensionamento
window.addEventListener("load", setElementHeight)
window.addEventListener("resize", setElementHeight)
