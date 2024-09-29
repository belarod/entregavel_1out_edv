//BOTAO PARA ABRIR ABA

const toggleConfig = document.getElementById("nav__link--click");
const aba = document.getElementById("troca__tema");
const icon = document.querySelector('nav__link--click')

toggleConfig.addEventListener('click', () => {
 
  if (aba.classList.contains('hidden')) {
    aba.classList.remove('hidden'); 
    aba.classList.add('visible');   
  } else {
    aba.classList.remove('visible'); 
    aba.classList.add('hidden');     
  }
});