/* NOVOS RECURSOS E ALGUMAS INFORMAÇÕES IMPORTANTES E CRIAR OS PROPRIOS RECURSOS */
var msg = 'Oloá Mundo!';

//Saber a posição de um certo valor
console.log(
    msg.indexOf('lá'),
    msg.indexOf('o')
);

//Ela percorre a posição ao contrario
console.log(
    msg.lastIndexOf('O'),
);

//Se ele nao retornar nada, ele vai retornar -1, e podemos usar isso no if


//Ele é como se fosse indexof, melhorado. Além de vc poder usar ideia do indexof, podemos usar ele como expressão regular
console.log(
    msg.search(/o/)
);

//vai transformar em negrito com as tag do html <b>
console.log(
    msg.bold(),
);

//tag big e sub
console.log(
    msg.big().sub().fontsize(12),
);

//Retorna uma expressao boleana, se ela se inicia com oque vc digitou e também tem o que verifica no final
//tag big e sub
console.log(
    msg.startsWith('Oloá'),
    msg.endsWith('do!')
);


//Retorna se a letra esta incluido na string
console.log(
    msg.includes('M'),
);


/* CRIAR OS PROPRIOS RECURSOS */

//Consegue mexer nos metodos que ja existem
String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.substring(1, this.length).toLowerCase();
}

var msgCapitalize = 'ola mundo';

console.log(msgCapitalize.capitalize());