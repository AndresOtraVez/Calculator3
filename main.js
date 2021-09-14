const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const buttonsNumbers = document.querySelectorAll(".number");
const buttonsOperators = document.querySelectorAll(".operator");

const display = new Display(displayValorAnterior, displayValorActual);

buttonsNumbers.forEach(button => {
    button.addEventListener("click", () => display.agregarNumero(button.innerHTML));
});

buttonsOperators.forEach(button => {
    button.addEventListener("click", () => display.computar(button.value))
});