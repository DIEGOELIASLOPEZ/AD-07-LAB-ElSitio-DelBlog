window.addEventListener("DOMContentLoaded", () => {
    fetch('Nav-Menu.html')
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('No se pudo cargar el menú')
            }
            return respuesta.text();
        })
        .then(data => {
            document.getElementById('nav-menu').innerHTML = data;
        })
        .catch(error => console.error('Error:', error))
})