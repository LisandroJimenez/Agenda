document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('nameInput') && document.getElementById('emailInput') && document.getElementById('inputPassword5')) {
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

        loginBtn.addEventListener('click', function () {
            localStorage.setItem('userName', nameInput.value);
            localStorage.setItem('userEmail', emailInput.value);
            window.location.href = '/contactos.html';  
        });

        checkForm();
    }

    if (document.getElementById('profileName') && document.getElementById('profileEmail')) {
        const userName = localStorage.getItem('userName');
        const userEmail = localStorage.getItem('userEmail');

        if (userName) {
            document.getElementById('profileName').textContent = userName;
        }

        if (userEmail) {
            document.getElementById('profileEmail').textContent = userEmail;
        }
    }
});
