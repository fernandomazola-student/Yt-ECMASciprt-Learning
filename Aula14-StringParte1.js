/* METODOS ANTIGOS, MANIPULAÇAO DE STRING E COMO FUNCIONA */


//Tudo no javascript é objeto, ou seja, terão varios metodos e ações dentro dele, e quando criamos uma string, ele nos abre
//diversas opções do objeto String.


var msg = 'Olá Olá Mundo!';

//Pega a primeira posição da mensagem
console.log(msg.charAt(0));

//outra formna de fazer isso, como vetor
console.log(msg[0]);

//Ele ira mostrar o codigo dele ask2 na posição que desejar
console.log(msg.charCodeAt(0));

//outra forma de concatenar strings
var msg1 = 'Olá Mundo 1!'
var msg2 = 'Olá Mundo 2!'

//maneira antiga
console.log(msg1 + ' ' + msg2);

//maneira nova com ecma e template string
console.log(`${msg1} ${msg2}`);

//A outra forma é usando o metodo de concatenação
console.log(msg1.concat(" ", msg2));


//é o método que substitui palavras, mas dessa forma ele substitui o primeiro olá que aparecer
console.log(msg.replace('Olá', 'Oi'));

//agora para substituir todos do texto por exemplo, podemos usar de duas forma.

//usar dois replace, replace
console.log(msg.replace('Olá', 'Oi').replace('Olá', 'Oi'));

//usar expressao regular
console.log(msg.replace(/Olá/g, 'Oi'));


//Normnalmente quando precisamos dividir a palavra em varias partes, ou arquivo csv

var csv = "id, nome, idade, sexo";
//quebra quando acha uma virgula, caso queira que quebramos tudo, até os espaço, deixamos vázio
console.log(csv.split(''));
console.log(csv.split(','));

//quando vc só quer uma parte da string, só os 5 primeiros caracteres
console.log(msg.slice(0, 4));

//metodo substring, ele funciona da mesma forma que o slice
console.log(msg.substring(0, 4));

//Passa todos os caracteres para maisuculos
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());


//valueOf ele encontra o valor da string, e retorna o valr especificado
console.log(msg.valueOf());

//Covnerte para string
console.log(msg.toString());

//substr mesma ideia do slice, só que a fatia diferente, vc informa a posição que vc esta, e quantos caracteres vc quer pegar depois dali
console.log(msg.substr(1,2));
