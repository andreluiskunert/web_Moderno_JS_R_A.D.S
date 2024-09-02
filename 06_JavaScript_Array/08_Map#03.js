console.log("=======> Map#03 <====")
  console.log("Explicar com será aula")
  /// pega o exemplo 02
  Array.prototype.map2 = function(callback){
     const newArray = []
     for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
      } 
       return newArray 
    }
  const carrinho = [
    '{"nome": "Borracha", "preco":3.45}',
    '{"nome": "Caderno", "preco":13.45}',
    '{"nome": "Kit de Lapis", "preco":41.45}',
    '{"nome": "Caneta", "preco":7.50}'
]
// Retornar um array apenas com os preços
  const paraObjeto = json => JSON.parse(json)
   const apenasPreco = produto => produto.preco 
    const resultado = carrinho.map2(paraObjeto).map(apenasPreco)
     console.log(resultado)
console.log("The End.")