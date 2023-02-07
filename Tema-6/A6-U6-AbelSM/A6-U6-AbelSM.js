
var inputs = document.querySelectorAll("input");
document.getElementById("quitar").addEventListener('click', () => {
    inputs.forEach(input => {
        if (!input.value) {
            input.classList.toggle("ocultar")
        }

})
});