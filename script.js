let a = 0;
let b = 1;
let next;

function fibonacci() {
    next = a + b;
    a = b;
    b = next;
}

function isFibonacci(num) {

    let x = 0;
    let y = 1;
    let temp;

    while (y < num) {
        temp = x + y;
        x = y;
        y = temp;
    }
    
    if (y === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

const check = document.getElementById("check");
check.addEventListener("click", function(e) {

    const checkValue = document.getElementById("checkValue");
    const value = parseInt(checkValue.value);

    document.getElementById("checking").innerHTML = (isFibonacci(value));

});

const nextFibonacci = document.getElementById("nextFibonacci")
nextFibonacci.addEventListener("click", function (e) {
    fibonacci();
    var add = document.getElementById("fibonacciSequence");
    add.innerHTML += `, ${next}`
    
})

function aString(str) {
    let counter = 0;
    const aCounter = document.getElementById("aCounter");
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            counter++;
        }
    }

    if (counter > 0) {
        aCounter.innerHTML = `A letra "a" aparece ${counter} vez(es) na string`
    } else {
        aCounter.innerHTML = `A letra "a" não foi encontrada na string`
    }
}


text.addEventListener("keyup", function () {
    let text = document.getElementById("text");
    let textValue = String(text.value).toLowerCase();
    (aString(textValue));
})

let indice = 12;
let soma = 0;
let k = 1;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
}
console.log(soma);