//NOVAS FUNÇÕES DE FUNCTIONS NO JS es6

/**
 Reduzir a quanitdade de function que escrevemoos, deixar legivel e mais organizado.
 */

 //ARROW FUNCTION - LAMBDA

 var showMessage = (x) => {
     console.log(x);
 };

 showMessage('Olá mundo');

 //OUTRA FORMA DE ESCREVER, EM UMA LINHA
 var showMessage2 = x => console.log(x);
 showMessage2('Olá Mundo2');
 //ou
 var showMessage3 = (x) => {console.log(x);}
 showMessage3('Olá Mundo3');

  //FUNÇÕES ENCAPSULADAS - Nenhum codigo externo vai ter acesso a essa função encapusladas, a nao ser que permitimos com objeto window
var x = 5;
var y = 6;

(function(x,y){
    console.log(x, y);
})(10,5);

//Reduzir o codigo de funções encapsuladas, USANDO ARROW function nelas
var result = ((...params) => {
    var s = 0;
    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        s += element;
    }
    return s;
})(10, 6);
console.log(result);