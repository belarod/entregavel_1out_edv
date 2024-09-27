const darkmode = localStorage.getItem('darkmode')
const trocaTema = document.getElementById('troca__tema')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === 'active') enableDarkmode()

trocaTema.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode() //se darkmode nao for ativo, ativar, se nao, desativar
})