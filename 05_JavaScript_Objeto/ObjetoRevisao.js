console.log("===> Objeto Revisão <==== ")
console.log("Explicar...");
// Coleção dinamica de pares chaves/ valores:
//   const produto =  new Object
//    produto.none = 'Notebook '
//       produto['Marca do produto'] = 'Gerenica'
//         produto.preco = 1.799
//          console.log("o produto:",produto)
//     /// apagar...
//     delete produto.preco
//      delete produto['Marca do produto']
//      console.log("o produto:",produto)
  // outro exemplo mais complexões:
    const carro = {
        modelo: 'A4',
        valor: 89000,
        proprietario:{
            nome: 'André Luis',
            Sobrenome: 'kunert',
            idade: 43,
            endereco:{
                logradouro: 'Rua felicidade',
                numero: 357.
            }
        },
        condutores: [
            {
                nome: 'Elaine  Kunert',
                idade: 25
            }, {
                 nome: 'Sofia Kunert',
             idade: 18 
            }
            
        ],
        calcularVAlorSeguro: function(){
            //...
        }
    }
    carro.proprietario.endereco.numero =  1000,
    carro['proprietario'] ['endereco']['logradouro'] =  'Av Gigante'
    console.log(carro)
    delete carro.condutores
    delete carro.proprietario.endereco
    delete carro.calcularVAlorSeguro
    console.log(carro)
    console.log(carro.condutores)
  //  console.log(carro.condutores.length)
console.log("The End.");
