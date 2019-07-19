/* */

//Formas de criar variaveis do tipo number
var x = 10;
var y = new Number('5');

console.log(typeof x, typeof y);

console.log(
    //valor numero maximo
    Number.MAX_VALUE,
    //Valor minimo
    Number.MIN_VALUE,
    //Maior valor inteiro
    Number.MAX_SAFE_INTEGER,
    //Menor valor inteiro
    Number.MIN_SAFE_INTEGER,
    //Tipo numero, nao numerico
    Number.NaN,
    //converte para um numero inteiro
    parseInt(6.265565),
    //converte para numero conservando as casas decimais
    parseFloat(6.34343),
    //teste para ver se é numer ou string
    isNaN('a'),
    isNaN(2),
);


//Exponenciação
console.log(
    x.toExponential(),
);

//Determina a quantindade de casas decimais, passando esse numero para string
console.log(
    x.toFixed(2),
);

//Precisão do valor que vai ter
console.log(
    x.toPrecision(2),
);

