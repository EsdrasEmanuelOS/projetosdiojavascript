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
}
  