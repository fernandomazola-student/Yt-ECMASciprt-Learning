//ES5 

/*


Funçoes nao exige nenhum tipo de retorno, diferente dos metodos


*/


//Declarar a palavra function e o nome, pedindo parametros ou não
function soma(x , y){
    console.log(x + y);
}

//Chamar a função
soma(2,43);

//Caso eu nao queira imprimir na tela  na propria função posso usar o Return

function soma2(x,y){
    return x + y;
}

var result = soma2(2,10);
console.log(result);


//FUNÇÕES ANONIMAS OU LAMBDA FUNCTION

// para isso ser validavel, tenho que jogar a função dentro da variavel. Muito comum em eventos de click por exemplo, quando capturamos
// o id do botao, e usamos o evento onclick dele
var button = document.querySelector('btn');
button.onclick = function(){
//Só que aqui nao podemos usar parametros, no de baixo podemos
}

var clickEvent = function(para){
    //faz algo e depois jogar no onclick
}

button.onclick = clickEvent;

var soma = function(x,y){
    return x+y;
}