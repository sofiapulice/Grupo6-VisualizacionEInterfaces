const turnos = document.querySelectorAll('.date.turno');

turnos.forEach(turno => {
    turno.addEventListener('click', function() {
        turnos.forEach(t => t.classList.remove('selected'));
        this.classList.add('selected');
    });
});
