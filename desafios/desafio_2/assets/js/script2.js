// Solução 2 - Desabilitar o botão;
// Funções

function increment() {
    document.getElementById('adicionar').disabled = false;
    document.getElementById('subtrair').disabled = false;

    if(currentNumber === 10) {
        document.getElementById('adicionar').disabled = true;
        return
    }

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    document.getElementById('subtrair').disabled = false;
    document.getElementById('adicionar').disabled = false;

    if(currentNumber > 0) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    
    else if(currentNumber === 0) {
        document.getElementById('subtrair').disabled = true;
        return
    }
    
}

// Variáveis

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;