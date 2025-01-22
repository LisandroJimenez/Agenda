document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('inputPassword5');
    const loginBtn = document.getElementById('loginBtn');

    function checkForm() {
        if (nameInput.value !== '' && emailInput.value !== '' && passwordInput.value !== '') {
            loginBtn.disabled = false;
        } else {
            loginBtn.disabled = true; 
        }
    }

    nameInput.addEventListener('input', checkForm);
    emailInput.addEventListener('input', checkForm);
    passwordInput.addEventListener('input', checkForm);

    checkForm();

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.btn');
    
    // Verifica que el botón existe antes de agregar el evento
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const email = document.getElementById('exampleFormControlInput1').value;

            if (email) {
                // Guardar el correo en localStorage
                localStorage.setItem('userEmail', email);
            }
        });
    }

    // Cargar el correo en la página de perfil (si existe en localStorage)
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        document.querySelector('.profile-info').textContent = userEmail;
    } else {
        document.querySelector('.profile-info').textContent = 'No email found';  // Valor por defecto
    }
});
