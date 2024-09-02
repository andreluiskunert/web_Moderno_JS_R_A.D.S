// Obs.: Banheiros só por alguns minutos...
console.log("---- Evitando MOdificações------")
console.log("Explicar ....")
// 
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'Promoção'
})
  console.log('Extensivel:',Object.isExtensible(produto))
   produto.nome = 'Borracha'
   produto.descricao = 'Borracha Escolar Branca'
   delete produto.tag
   console.log("Qual é o produto?" ,produto, ";")
// Ex 02:
  const pessoa = {nome: 'André Luis', idade: 40 ,profissao: 'Técnico em Informática e Analista de TI e Sistemas'}
    Object.seal(pessoa)
      console.log('Selado:',Object.isSealed(pessoa))
       pessoa.sobrenome = 'Kunert'
        delete pessoa.nome
         pessoa.idade = 42
          console.log(pessoa)
  console.log("The End.")