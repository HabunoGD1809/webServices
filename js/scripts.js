document.addEventListener('DOMContentLoaded', () => {
   const contactosList = document.getElementById('contactos-list');
   const nuevoContactoForm = document.getElementById('nuevo-contacto-form');

   // Cargar lista de contactos al cargar la página
   fetch('/contactos')
      .then(response => response.json())
      .then(contactos => {
         contactos.forEach(contacto => {
            const contactoDiv = document.createElement('div');
            contactoDiv.textContent = `${contacto.nombre} ${contacto.apellido} - ${contacto.telefono}`;
            contactosList.appendChild(contactoDiv);
         });
      })
      .catch(error => console.error('Error al cargar la lista de contactos:', error));

   // Agregar nuevo contacto al enviar el formulario
   nuevoContactoForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const telefono = document.getElementById('telefono').value;

      fetch('/contactos', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ nombre, apellido, telefono })
      })
         .then(response => response.json())
         .then(data => {
            const contactoDiv = document.createElement('div');
            contactoDiv.textContent = `${data.nombre} ${data.apellido} - ${data.telefono}`;
            contactosList.appendChild(contactoDiv);
            // Limpiar el formulario
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('telefono').value = '';
         })
         .catch(error => console.error('Error al agregar contacto:', error));
   });
});
