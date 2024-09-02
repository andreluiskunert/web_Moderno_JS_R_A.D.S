console.log("====> Funçẽos Importantes De Object <======");
console.log("Explica.....");
const pessoa ={
    nome: 'Andre Luis',
    sobrenome: 'Kunert',
    idade: 42,
    profissional: 'Programador Web',
    peso:69.9,
}
 console.log("Que sou eu?", Object.keys(pessoa),";");
 console.log("Que sou eu?", Object.values(pessoa),";");
 console.log("Que sou eu?", Object.entries(pessoa),";");
/// 
Object.entries(pessoa).forEach(([chave, valor])=>{
    console.log(`${chave}: ${valor}`);
})
/// Obs.: vou parar aqui,...
/*  sábado 03/08/2024 
-> Revendo a aula inteira.... 

*/

Object.defineProperty( pessoa, 'dataNascimento',{
    enumerable: false,
    writable: false,
    value:'02/06/1982'
});
pessoa.dataNascimento = '14/11/1986';
console.log("data de Nascimento é ",pessoa.dataNascimento);
console.log(Object.keys(pessoa));
// Object.assign (ECMAScript 20215)
 const dest = {a: 1}
  const o1 = {b: 2}
   const o2 = {c: 3, a: 4}
    const obj = Object.assign(dest, o1, o2) ;
 //   Object.freeze(obj)
    obj.c = 7500
    console.log("Meu Sálario é ",obj,"R$ por mês; ");


 
console.log("The End.");
