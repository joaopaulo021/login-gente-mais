firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "./home.html"
    }
})


function onChangeEmail() {
    toggleButtonDisabled()
    toggleEmailErrors()
}

function onChangePassword() {
    toggleButtonDisabled()
    togglePasswordErrors()
}


function login() {
    showLoading()
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value).then(response => {
        hideLoading()
        console.log('sucess', response)
        window.location.href = "home.html"

    }).catch(error => {
        hideLoading()
        alert(getErrorMessage(error))
        console.log('error', error)
    })
}

function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado !"
    }

    if (error.code == "auth/wrong-password") {
        return "Senha Inválida !"
    }
    return error.message
}




function toggleEmailErrors() {
    const email = document.querySelector(".email-login").value
    if (!email) {
        document.getElementById('email-required-error').style.display = "block"
    } else {
        document.getElementById('email-required-error').style.display = "none"
    }

    if (validateEmail(email)) {
        document.getElementById('email-invalid-error').style.display = "none"


    } else {
        document.getElementById('email-invalid-error').style.display = "block"
    }


}

function togglePasswordErrors() {
    const password = document.querySelector('.password-login').value
    if (!password) {
        document.getElementById('password-required-error').style.display = "block"

    } else {
        document.getElementById('password-required-error').style.display = "none"
    }
}


function toggleButtonDisabled() {
    const btnLogin = document.querySelector('.btn-login')
    const passwordValid = isPasswordValid()
    const emailValid = isEmailValid()
    btnLogin.disabled = !emailValid || !passwordValid
}

function isEmailValid() {
    const email = document.querySelector(".email-login").value
    if (!email) {
        return false
    }
    return validateEmail(email)
}


function isPasswordValid() {
    const password = document.querySelector('.password-login').value
    if (!password) {
        return false

    }
    return true
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);

}


const form = {
    email: () => document.querySelector(".email-login"),
    loginButton: () => document.querySelector("btn-login"),
    password: () => document.querySelector(".password-login"),
}