document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.edit-contact').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault(); 
            const contactId = e.target.closest('a').getAttribute('data-contact-id');
            console.log('Redirigiendo al contacto con ID: ' + contactId);
            window.location.href = `detalles.html?id=${contactId}`;
        });
    });
});
