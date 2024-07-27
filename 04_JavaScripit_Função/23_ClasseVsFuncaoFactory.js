console.log("====> Classe Vs Função Fatory <====");
console.log("Explicar o assunto....");
// Exemplo na pratica:
 class pessoa{
    constructor(nome){
     this.nome = nome
           } 
           falar(){
            console.log(`Meu nome é ${this.nome};`)
           }
}
const p1 = new pessoa('André Luis ');
p1.falar();
// 2ª Exemplo:
const criarPessoa = sobrenome =>{
    return {
        falar: ()=> console.log(`Meu sobrenome é ${sobrenome}`)
    }
}
const p2 = criarPessoa('Kunert');
p2.falar();


 console.log("The End.");
