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
