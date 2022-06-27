// o que são vetores ou arrays

//como declarar um array
/* let array = ['string,', 1, true];
 console.log(array[1]);*/

 //pode guardar varios tipos de dados
/* let array = ['string', 1, true, ['array1'], ['array2'], ['array3']];
 console.log(array);*/

 // forEach- traz um function
/*  array.forEach(function(item, index){console.log(item, index)});*/

//push - traz um item no final do array
/* array.push(1);
 console.log(array);*/

 //pop - tira item no final do array
/*array.pop();
console.log(array);*/

//shift - tira item do inicio do array
/*array.shift();
console.log(array);*/

//unshift - adiciona item no inicio do array
/*array.unshift('novo item no inicio');
console.log(array);*/

//indexOf - retorna o índice de um valor
/*console.log(array.indexOf(true));*/

//splice - remove ou substitui um item pelo índice;
/*array.splice(0, 3);
console.log(array);*/

//slice - retorna uma parte de um array existente
/*let novoArray = array.slice(0, 3);
console.log(novoArray);*/

//objetos - dados que possuem propriedade e valores deve ser declado em {}
let object = { string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {
objectInterno: 'objeto interno'}};  
/*//para retornar só uma propriedade use o: '.' depois de object
console.log(object.objectInterno);*/
/*
//formas de fazer desestruturação
var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);*/

var{string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);