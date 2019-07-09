/**
 
 */


/*FUNÇÕES GERADORAS - Como uma função normal é criada, o controle fica com a chamada da funçãpo até retorbnar, e fica
executando até retornar algo. A função de chamada pode executar uma função de chamada. Dentro de umna função ela vai ter o fluxo, até
que ela seja chamada.*/


function* perguntas(){
    const nome = yield 'Qual é o seu nome?';
    const idade = yield 'Qual é a sua idade?';
    //A cada rodada de lupe, eele faz uma pergunta diferente
    return `Nome: ${nome} e a sua Idade: ${idade}`;
}

var it = perguntas();

console.log(it.next());
console.log(it.next('Fernando'));
console.log(it.next(23));