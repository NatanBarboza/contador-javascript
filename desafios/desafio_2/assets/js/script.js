// Solução 1 - Alertar na tela quando chegar aos valores base;
// Funções

function increment() {
    if(currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else {
        alert("O número não pode ser maior que 10.")
    }

}

function decrement() {
    if(currentNumber > 0) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    else{
        alert("O número não pode ser negativo.")
    }
    
}

// Variáveis

var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;