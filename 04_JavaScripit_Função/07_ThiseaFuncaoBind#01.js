console.log("===> This  e a Função Bind#01 <===");
console.log("Explica....");
const pessoa = {
 saudacao : 'Boa noite',
 falar()
  {
   console.log(this.saudacao)
  }
}
 pessoa.falar();
 const falar = pessoa.falar
 falar() // Conflito entre paradigmas: Funcional e  OO  ->undefined
 ///
 const falarDePessoa =  pessoa.falar.bind(pessoa);
 falarDePessoa();



console.log("The End.")