window.alert('Por favor, teste as interações clicáveis(principalmente a bolinha branca)');

document.addEventListener('DOMContentLoaded', function () {
    const modoNoturnoToggle = document.getElementById('modo-noturno');

    modoNoturnoToggle.addEventListener('change', function () {
        document.body.classList.toggle('modo-noturno');
    });
});