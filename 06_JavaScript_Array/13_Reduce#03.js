console.log("====> Reduce #01 <====")
 console.log("Explicar")
 // Quinta-feira de manhã {22/08/2025_06:00:00 a }
  Array.prototype.reduce2 = function(callback, valorIncial)  {
    const indiceInicial = valorIncial? 0 :1
    let acumulador = this[0]
     for(let i = indiceInicial; i < this.length; i++){
         acumulador = callback(acumulador, this[i], i, this)
     }
     return acumulador
  }
   const soma = (total, valor) => total + valor
     const nums = [1, 2, 3, 4, 5, 6, 7]
      console.log("Qual é o valor total somado?", nums.reduce2(soma))

console.log("The End.")