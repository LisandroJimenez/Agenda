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
});
