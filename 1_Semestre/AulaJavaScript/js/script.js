/* Tipos de fazer funcões todas essas formas funcionam
var num1;

let num2;

num3

const pi = 3.14

aritméticos = (+,-,/,*,**)
Lógicos => && || !
Comparação => >,<, >=, ==, <=, !=, ===
Atribuição => = += -= *= /= 
*/


function boasVindas(){
    //alert("Seja bem vindo !")
    document.write("Seja bem vindo !")
}

function somar(){
    //Valor1 = parseInt(document.frmCalc.txtValor1.value);
    //Valor2 = parseInt(document.getElementById("txtValor2").value);
    
    Valor1 = document.getElementById("txtValor1");
    Valor2 = document.getElementById("txtValor2");
    resultado = document.getElementById("resultado");
    if(Valor1.value == ""){
        alert("Campo Obrigatório");
        Valor1.focus();
        return false;
    }

    soma = parseInt(Valor1.value) + parseInt(Valor2.value);
    document.write(soma); //Imprime o resultado como escrito na tela
    alert("O resultado da operação é: " + soma); // Imprime o resultado da conta como caixa de alerta
    resultado.innerText = soma

}