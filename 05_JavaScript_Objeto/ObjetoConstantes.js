console.log("===> Objeto Constantes <====");
console.log("Explica....");
// pessoa -> 123 ->  (...)
 const pessoa = {nome:'João'}
 pessoa.nome = 'Pedro';
 console.log(pessoa)
 // pessoa -> 456 -> {...}
//  pessoa = {nome:'Ana'}
  Object.freeze(pessoa); // encgelou o Objeto....
  pessoa.nome = 'Maria';// Ignora está tentativa...
  pessoa.end = 'Rua ABc'
  delete pessoa.nome
  console.log(pessoa);
  // Objeto Constante
    const pessoaConstante = Object.freeze({nome: 'Joâo'});
    console.log(pessoaConstante);
    
console.log("The End.");
