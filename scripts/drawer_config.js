//BOTAO PARA ABRIR ABA

const toggleConfig = document.getElementById("nav__link--click");
const aba = document.getElementById("troca__tema");
const icon = document.querySelector('nav__link--click')

toggleConfig.addEventListener('click', () => {
  // Verifica se a aba tem a classe 'hidden'
  if (aba.classList.contains('hidden')) {
    aba.classList.remove('hidden');  // Remove a classe 'hidden' para mostrar
    aba.classList.add('visible');   // Adiciona a classe 'visible'
  } else {
    aba.classList.remove('visible'); // Remove a classe 'visible'
    aba.classList.add('hidden');     // Adiciona a classe 'hidden' para esconder
  }
});