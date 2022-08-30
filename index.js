let btn =
    document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('labelNome')
let validNome = false

let usuario = document.querySelector('usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirSenha = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

nome.addEventListener('keyup', () => {
    if (nome.ariaValueMax.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = 'nome *insira no minimo 3 caracteres'
        nome.setAttribute('style', 'color: red')
        validNome = false
    } else {
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validNome = true
    }
})

usuario.addEventListener('keyup', () => {
    if(ususario.value.lenght <= 4){
        labelUsuario.setAttributeNS('style', 'color: red')
        labelUsuario.innerHTML =
    }
})