// contactos.js

// Asegúrate de que el documento esté completamente cargado antes de agregar eventos
document.addEventListener("DOMContentLoaded", function () {
    // Capturamos todos los botones de editar contacto (los enlaces con la clase .edit-contact)
    document.querySelectorAll('.edit-contact').forEach(function (button) {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Evita que el enlace haga un comportamiento por defecto

            // Obtener el ID del contacto desde el atributo 'data-contact-id' o la URL
            const contactId = e.target.closest('a').getAttribute('data-contact-id');
            console.log('Editar contacto con ID: ' + contactId);
            
            // Aquí puedes poner la lógica que desees, por ejemplo:
            // - Mostrar un modal de edición.
            // - Redirigir a otra página para editar el contacto.
            // - Mostrar más detalles del contacto.
            alert("Estás editando el contacto con ID: " + contactId);
        });
    });
});
