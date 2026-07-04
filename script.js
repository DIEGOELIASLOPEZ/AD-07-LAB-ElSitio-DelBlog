
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
        
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el footer:', error));
})
