let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btComparar = document.querySelector("#btCalcular");
let h3Resultado = document.querySelector ("#h3Resultado");

function compararValores(){
    let Num1 = Number(inputnum1.value);
    let Num2 = Number(inputnum2.value);
    let compararValores = (Num1) < (Num2)
}

if (Num1 > Num2) {
    h3Resultado.textContent = "O maior valor é: " + Num1;

} else if (Num2 > Num1) {
    h3Resultado.textContent = "O maior valor é: " + Num2;

} else {
    h3Resultado.textContent = "Os dois valores sao iguais.";
}

btComparar.onclick = function(){
    compararValores();
}
