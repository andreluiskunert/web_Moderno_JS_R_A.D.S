console.log("=====> Função Fatory #01 <====");
console.log("Explicar....");
/* // 1ª Exemplo:
 const prod1 = {
    nome: 'Notebook Lenovo',
    preco: 1.799
 }
 // 2ª exemplo:
 const prod2 = {
    nome: 'Mouse Pad',
    preco: 50.00
 } */
// Factory Simples
 function criarPessoas() {
    return {
        nome: 'Andre Luis ',
        sobrenome: 'Kunert',
        idade: 42 ,
        profissao:'Programador Web'
    }
 }
 console.log("Olá,sou ", criarPessoas(),";");
 

console.log("The End.");
