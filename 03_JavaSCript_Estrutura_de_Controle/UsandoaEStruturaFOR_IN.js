console.log("===>   Usando a Estrutura FOR/IN <====");
console.log("Explicar...tanto exemplo...");
// FOR/IN: 
/* console.log("FOR na estrutura de um array:")
const notas =[6.7, 7.4, 9.8, 8.1, 7.7];
/*  for(let i = 0; i < notas.length;i++){
    console.log(`As Notas são = ${notas[i]}`);
 } */
 //for(i in notas){  console.log(i, notas[i]); } 
 // OBJ.ATRIBUto;
   const pessoa = {
    nome: 'Sidiane ',
    sobrenome: 'Ribeiro',
    idade: 23, 
    peso: 90,

   }
   for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
   }

console.log("The End.");
