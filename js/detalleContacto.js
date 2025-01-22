function getUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id'); 
}

function loadContactDetails(contactId) {
    const contactData = {
        1: { 
            name: 'Juan Reyes', 
            phone: '+1 234 567 890', 
            email: 'JuanRR@example.com',
            image: '/assets/imgs/avatar-3814049_640.png'  
        },
        2: { 
            name: 'Carlos Hernandez', 
            phone: '+1 234 567 891', 
            email: 'HerCarlos@example.com',
            image: '/assets/imgs/carlos.png'  
        },
        3:{
            name: 'Jemali Jiménez', 
            phone: '+502 39943838', 
            email: 'jemmaj@gmail.com',
            image: '/assets/imgs/jemali.png'   
        },
        4:{
            name: 'Javier López', 
            phone: '+502 37749383', 
            email: 'javiiiih@gmail.com',
            image: '/assets/imgs/javier.png'  
        },
        5:{
            name: 'Floridalma Vásquez', 
            phone: '+502 39940484', 
            email: 'vasquezflo@gmail.com',
            image: '/assets/imgs/floridalma.png' 
        }
    };

    const contact = contactData[contactId];

    if (contact) {
        document.getElementById('contactName').innerText = contact.name;
        document.getElementById('contactPhone').innerText = contact.phone;
        document.getElementById('contactEmail').innerText = contact.email;
        document.getElementById('contactAvatar').src = contact.image; 
    } else {

        document.getElementById('contactName').innerText = 'Contacto no encontrado';
        document.getElementById('contactPhone').innerText = 'No disponible';
        document.getElementById('contactEmail').innerText = 'No disponible';
        document.getElementById('contactAvatar').src = '/assets/imgs/avatar-3814049_640.png'; 
    }
}

const contactId = getUrlParams();
loadContactDetails(contactId);
