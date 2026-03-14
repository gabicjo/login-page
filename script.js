const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const submitButton = document.querySelector("#login-box button[type='submit']");

function limparInputsVisiveis() {
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function ValidarDados() {

    const username = usernameInput.value.trim()
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()

    const placeholder = document.getElementsByClassName("placeholder")

    for (let i = 0; i < placeholder.length; i++) {
        placeholder[i].innerHTML = "";
    }
    
    let temErro = false

    if (username === "") {
        placeholder[0].innerHTML = "Não pode deixar o nome em branco."
        temErro = true
    } else if (username.length < 5) {
        placeholder[0].innerHTML = "O nome de usuario precisa ter mais que 5 caracteres."
        temErro = true
    } else if (!isNaN(username[0])) {
        placeholder[0].innerHTML = "O nome de usuario não pode começar com numeros"
        temErro = true
    }

    if (email == "") {
        placeholder[1].innerHTML = "O email não pode estar em branco.";
        temErro = true;
      }

    if (password.length < 8) {
        placeholder[2].innerHTML = "Sua senha precisa ter mais de 8 caracteres."
        temErro = true
    } else if (password.length > 16) {
        placeholder[2].innerHTML = "Sua senha precisa ter menos de 16 caracteres"
        temErro = true
    }

    if (temErro == false) {
        enviarDados(username, email, password);
        limparInputsVisiveis()
        alert("Seus dados foram enviados");
        for (let i = 0; i <= placeholder.length; i++) {
            placeholder[i].innerHTML = ""
        }
    }
}

submitButton.addEventListener("click", function (event) {
    ValidarDados();
});  
