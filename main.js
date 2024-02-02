const form = document.getElementById("form-camp")

const campoB = document.getElementById("campo-b")
const campoA = document.getElementById("campo-a")

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const messageSuccess = `Certo! o campo B: <b>${campoB.value}</b> é maior que o campo A: <b>${campoA.value}</b>.`
    const messageError = `Errado! o campo B: <b>${campoB.value}</b> é menor que o campo A: <b>${campoA.value}</b>.`

    const erroP = document.querySelector('.errorP')
    const sucessoP = document.querySelector('.successP')
    
    if (campoA.value < campoB.value) {
        sucessoP.innerHTML = messageSuccess
        sucessoP.style.display = 'block'
        erroP.style.display = 'none'

        campoA.value = ''
        campoB.value = ''
    } else {
        
        erroP.innerHTML = messageError
        sucessoP.style.display = 'none'
        erroP.style.display = 'block'

        campoA.value = ''
        campoB.value = ''
    }
    
})