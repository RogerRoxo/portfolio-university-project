

function checkFields() {

    let nameField = document.getElementById("name").value;
    let emailField = document.getElementById("email").value;
    let msgField = document.getElementById("msg").value;

    
    if (checkEmail(emailField)){
        alert("Sua mensagem foi enviada com sucesso!")
    }
    else{
        alert("Informe um endereço de email correto!")
    }

}


function checkEmail(email) {

    // Using to check if have text before and after '@' and after '.'
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email)
}


// Make button in form run function checkFields()
document.getElementById("contact-form").addEventListener("submit", checkFields);