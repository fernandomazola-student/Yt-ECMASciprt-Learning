/*

for
for ... in
for ... of
*/

nome = ['Maria', 'João', 'Pedro'];
for (let contador = 0; contador < nome.length; contador++) {
    const element = nome[contador];
    console.log(element);
}


var pessoa = {
    nome: 'Fernando',
    idade: 23,
    sexo: 'M'
}
nome1 = ['Maria', 'João', 'Pedro'];
//Percorrer um objeto ou vetor em que não sabemos o tamanho dele com a chave dele
//Usado para vetores e objetos em que nao sabemos o tamanho
for (const i in pessoa) {
   console.log(pessoa[i]);
}


//Percorrer um objeto ou vetor em que não sabemos o tamanho dele, passando para uma variavel de apoio, que armnazena posição por posição
todos = ['todo1', 'todo2']
//For of também é usado para interetors, set, map()
for (const todo of todos) {
    console.log(todo);
}