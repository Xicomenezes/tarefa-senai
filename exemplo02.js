var anoNasc, anoAtual, idade;

anoAtual = 2022;

var entrada = require('readline-sync');
anoNasc = parseInt(entrada.quetion("Informe o Ano de Nascimento..."));
idade = anoAtual-anoNasc;
console.log(idade);
if (idade>=18){
    console.log("Pode Acessar");
}else{
    console.log("Não pode Acessar")
}
