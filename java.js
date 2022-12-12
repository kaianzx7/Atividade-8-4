var num1= parseInt(prompt("Digite o primeiro valor: "));
var num2= parseInt(prompt("Digite o segundo valor: "));
var soma= 0;

while(num1 >= num2){
num1= parseInt(prompt("Digite o primeiro valor novamente, de forma que seu valor seja menor que o do segundo número: "));
 num2= parseInt(prompt("Digite o segundo valor: "));
}

for(num1; num1 <= num2; num1++){
    if(num1 % 2 == 1){
        soma += num1
    }
}
document.write(`Esta é a soma dos números ímpares dentre o intervalo: ${soma}`)