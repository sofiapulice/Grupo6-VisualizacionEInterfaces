// Seleccionamos todos los elementos con la clase "turno"
const turnos = document.querySelectorAll('.date.turno');

// Iteramos sobre cada uno para agregar el evento de clic
turnos.forEach(turno => {
    turno.addEventListener('click', function() {
        // Elimina la clase 'selected' de todos los turnos
        turnos.forEach(t => t.classList.remove('selected'));

        // Agrega la clase 'selected' al turno clickeado
        this.classList.add('selected');
    });
});
