// detalleContacto.js

// Función para obtener los parámetros de la URL
function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); // Obtener el valor del parámetro 'id'
}

// Función para cargar los detalles del contacto
function loadContactDetails(contactId) {
    // Aquí puedes hacer una solicitud a un servidor o base de datos para obtener los detalles del contacto
    // Para este ejemplo, simularé que los detalles son fijos para cada ID.

    const contactData = {
        1: { name: 'Juan Reyes', phone: '+1 234 567 890', email: 'JuanRR@example.com' },
        2: { name: 'Carlos Hernandez', phone: '+1 234 567 891', email: 'HerCarlos@example.com' },
        // Agrega más contactos si es necesario
    };

    const contact = contactData[contactId];

    if (contact) {
        document.getElementById('contactInfo').innerHTML = `
            <p><strong>Nombre:</strong> ${contact.name}</p>
            <p><strong>Teléfono:</strong> ${contact.phone}</p>
            <p><strong>Email:</strong> ${contact.email}</p>
        `;
    } else {
        document.getElementById('contactInfo').innerHTML = '<p>Contacto no encontrado.</p>';
    }
}

// Obtener el ID del contacto de la URL
const contactId = getUrlParams();

// Cargar los detalles del contacto correspondiente
if (contactId) {
    loadContactDetails(contactId);
} else {
    document.getElementById('contactInfo').innerHTML = '<p>No se ha proporcionado un ID válido.</p>';
}
