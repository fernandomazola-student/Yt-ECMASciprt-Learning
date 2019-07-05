/*
1º Instalar nodejs que ja trabalha com es6 e já possui npm

Aula que tem como objetivo a falar sobre variaveis e comentários durante a codificação

Comentários representados por: // 

Javascript é fracamente tipada e não existe tipos de variaveis, além disso o interpretador dele entende qual tipo de variavel está
sendo atribuida a ela.


Na versão 6 do ES vieram o CONST e LET

-Uma constante não pode mudar de valor, o primeiro valor que foi lhe atribuido não será mais modificado

-A Variavel LET ela é funcional apenas dentro do escopo em que ela está sendo usada: 
EX: Quando estamos com uma let dentro de function, ela não será enxergada fora, porém, se criarmos uma let fora da function,
podemos utiliza-la dentro da function


*/


//VARIAVEIS ES5
var x, y;
x = 5;
y = 6;
var soma = x + y;

//VARIAVEIS ES6
//LET E CONST

const pi = 3.14;

var array = [1,2,3,4,5,6,7,8];

for (var c = 1; c < array.length; c++){
    const element = array[i];
    console.log(element);
}

//Let é mais perfomatico, pois não fica na memoria, pois ele só fica no escopo, depoois disso ele some.