var contador = 0;

while(contador <= 10){
    console.log(`Contador: ${contador}`);
    contador++;
}

/*Vai executar pelo menos 1 vez*/
var contador = 11;
do{
    console.log(`Contador: ${contador}`);
    contador++;
    if(contador == 2){
        break; //mata o processo quando o contador for igual a 2
    }
}while(contador <= 10);
console.log(`Contador: ${contador}`);

var contador = 2;
while(contador <= 10){
    if(contador == 2){
        break; //mata o processo quando o contador for igual a 2
    }
    console.log(`Contador: ${contador}`);
    contador++;
}


do{
    if(contador % 2 == 0){
        contador++
        continue; //continua o processo do while
    }
    console.log(contador);
    contador++;
}while(contador<10);