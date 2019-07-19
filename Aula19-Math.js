/*
BIBLIOTECA MATH, NATIVO

*/

//CONSTANTE MATEMATICAS, PARA OPERAR COM CALCULOS
console.log(
    Math.E,
    Math.LN2,
    Math.LN10,
    Math.LOG2E,
    Math.LOG10E,
    Math.SQRT1_2,
    Math.SQRT2,
    Math.PI,
    );

//DOIS JEITOS DE FAZER EXPONENCIAÇÃO
console.log(
    4**3,
    Math.pow(4, 3),
);

//RAIZ
console.log(
    Math.sqrt(4),
);

//RAIZ CUBICA
console.log(
    Math.cbrt(8),
);

//RAIZ DE NUMERO MAIORES COM EXPONENCIAÇÃO
console.log(
    Math.pow(16, 1/4),
    4 ** (1/4),
);

//LOGARITMO
console.log(
    Math.log10(100),
    Math.log2(256),
    Math.log(4),
);

//FUNÇÕES ALGEBRICAS
console.log(
    //arredondar numeros
    Math.round(5.6),
    Math.round(5.4),

    //arredonda pra cima
    Math.ceil(5,1),
    //arredonda pra baixo
    Math.floor(5,9),

);


//PEGA O VALOR ABSOLUTO
console.log(
    Math.abs(5.04),
    Math.abs(5.5),
);


//PEGA O VALOR ABSOLUTO
console.log(
    Math.min(1,2,3,6,4,2,-3),
    Math.max(1,2,3,6,4,2,-3),
);

//SORTEIO DE NUMERO de 0 a 10
console.log(
    Math.round(Math.random() * 10),
);

//TRIGNOMETRIA
console.log(
    Math.sin(0.5), //seno
    Math.cos(0), //coseno
    Math.tan(0.5), //tangente
);