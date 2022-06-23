/*
// estruturas de decisão 
var jogador1 = 0;
var jogador2 = 01;
var placar;

//if (jogador1  != -1){  "ninho de if ou aninhamento de if"
jogador1 != -1 && jogador2 != -1 ? console.log('jogadores são validos'): 
console.log('Jogadores Inválidos'); // if ternario de uma linha só

//usando if
if(jogador1 > 0 && jogador2 == 0){
     console.log(' jogador 1 marcou ponto!');
     placar = jogador1 > jogador2;
      }  
      //usando else if
      else if(jogador2 > 0 && jogador1 == 0){
    console.log('jogador2 marcou ponto');
    placar = jogador2 = jogador1;
      }  
      // usando else
      else{
     console.log('ninguem marcou ponto');
    }
//}

switch(placar){
  case placar = jogador1 > jogador2:
      console.log ('jogador 1 Ganhou');
      break;
  case placar  = jogador2 > jogador1:
      console.log ('jogador 2 Ganhou');
      break;
  default:
        console.log('Empate')
} */
/* condição de repetição 
 for: repetição até que a condição seja falsa
 for/in executa repetição a partir de uma propriedade
for/of funciona como uma repetição a partir de um valor (não funciona com object somente numeros)
while (enquanto) a condição for verdadeira ele executa, sempre verifica antes 
do/while (até que) executa até a condição ser falsa
*/
let array = ['valor1 ', 'valor2', 'valor3', 'valor4', 'valor5', ];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }

/*for (let indice = 0; indice < array.length; indice++ ) {
    console.log(indice); 
}*/

// for (let i in array ) {
//   console.log(i);
// }

// // com object
// for (i in object){
//   console.log(i);
// }

// for(i of array){
//   console.log(i);
// }
//  // com object, não recomendado
// for (i of object.propriedade1){
//   console.log(i);
// }

// var a = 0;
//   while(a<10){
//      a++;
//      console.log(a);
//   }

var a= 0;
  do{
      a++;
      console.log(a);
  }while (a<10)