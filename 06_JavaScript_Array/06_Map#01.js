console.log("======> Map#01 <====")
 console.log("Explicar ")
   ///  
     const nums = [1, 2, 3, 4, 5]
     // For com  propósito 
       let resultado = nums.map(function(e){
         return e * 2
         })

        console.log("O resultado de Nums será?" , resultado , ";" )
         const soma10 = e => e + 10
          const triplo = e => e * 3
           const paraDinheiro = e => `R${parseFloat(e).toFixed(2).replace('.', ',')}`
            resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
             console.log("O resultado é ....",resultado, ";")

 console.log("The End.")