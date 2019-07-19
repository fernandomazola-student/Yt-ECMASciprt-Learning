//para representação de Numero em binario, usamos o 0 e o B e os binarios em seguida

var x = 0b010;
console.log(x);

//para representação de octal, usamos o 0 e o O e os binarios em seguida

var y = 0o011;
console.log(y);


//para representação de hexadecimal começamos com X
var h = 0xa;
console.log(h);

//Conversão de base
var num = 123;
//quanto é em binário
console.log(num.toString(2));

//Desafio, algum jeito de fazer com que o true seja false
var a = Number.NaN;
console.log(a === a);