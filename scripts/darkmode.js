let darkmode = ''
const trocaTema = document.getElementById('troca__tema')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    darkmode = 'active'
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    darkmode = 'disable'
}

if(darkmode === 'active') enableDarkmode()

trocaTema.addEventListener('click', () => {
    if (darkmode !== 'active') {
        enableDarkmode()
    }
    else{
        disableDarkmode()
    }
})
/* darkmode !== 'active' ? enableDarkmode() : disableDarkmode() //se darkmode nao for ativo, ativar, se nao, desativar

darkmode = localStorage.getItem('darkmode') */