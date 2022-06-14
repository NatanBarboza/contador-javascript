// Funções

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0) {
        document.getElementById('currentNumber').style.color = 'red';
    } else {
        document.getElementById('currentNumber').style.color = 'black';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0) {
        document.getElementById('currentNumber').style.color = 'red';
    } else {
        document.getElementById('currentNumber').style.color = 'black';
    }
}

// Variáveis

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;