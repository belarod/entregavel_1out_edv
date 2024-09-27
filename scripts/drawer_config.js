//BOTAO PARA ABRIR ABA

const toggleConfig = document.getElementById("nav__link--click")
const aba = document.getElementById("troca__tema")

toggleConfig.addEventListener('click', () => {
  if (aba.style.display === 'none') {
    aba.style.display = 'block'; // Mostra a abinha
} else {
    aba.style.display = 'none'; // Esconde a abinha
}})