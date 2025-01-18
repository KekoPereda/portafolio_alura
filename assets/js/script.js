const form = document.getElementById('form_contacto');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('form_nombre').value.trim();
    const email = document.getElementById('form_mail').value.trim();
    const asunto = document.getElementById('form_asunto').value.trim();
    const mensaje = document.getElementById('form_mensaje').value.trim();


    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }


    console.log('Formulario enviado con éxito:');
    console.log(`Nombre: ${nombre}`);
    console.log(`Correo: ${email}`);
    console.log(`Asunto: ${asunto}`);
    console.log(`Mensaje: ${mensaje}`);

    alert('Gracias por contactarme. Me pondré en contacto contigo pronto.');


    form.reset();
});