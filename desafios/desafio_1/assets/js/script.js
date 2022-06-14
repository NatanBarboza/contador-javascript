// Variáveis

const DECREMENTBUTTON = document.getElementById('subtrair');
const INCREMENTBUTTON = document.getElementById('adicionar');
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

// Mudanças nas variáveis

DECREMENTBUTTON.addEventListener("click", function() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
});

INCREMENTBUTTON.addEventListener("click", function() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
});