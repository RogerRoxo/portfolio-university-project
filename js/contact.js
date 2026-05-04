

function checkFields() {
    event.preventDefault(); // Prevents reload page after click button

    let nameField = document.getElementById("name").value;
    let emailField = document.getElementById("email").value;
    let msgField = document.getElementById("msg").value;

    // Email validation
    checkEmail(emailField);


    

}


function checkEmail(email) {

    // Using to check if have text before and after '@' and after '.'
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email)
}


// Make button in form run function checkFields()
document.getElementById("contact-form").addEventListener("submit", checkFields);