// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
            
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company') || 'No especificada';
    const service = formData.get('service') || 'No especificado';
    const message = formData.get('message');
            
    // Create WhatsApp message
    const whatsappMessage = `¡Hola! Me interesa conocer más sobre los servicios de Sansu Inc.
            
    *Datos de contacto:*
    • Nombre: ${name}
    • Email: ${email}
    • Empresa: ${company}
    • Servicio de interés: ${service}

    *Mensaje:*
    ${message}

    Espero su respuesta para agendar la asesoría gratuita. ¡Gracias!`;
            
    // Open WhatsApp
    const whatsappURL = `https://wa.me/573001234567?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
            
    // Show success message
    alert('¡Gracias por tu interés! Te estamos redirigiendo a WhatsApp para continuar la conversación.');
});