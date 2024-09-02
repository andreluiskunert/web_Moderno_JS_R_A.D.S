console.log("=====> 05_ForEach#2 <=====")
 console.log("Explica ")
 console.log("Explicar e da alguns exemplos....") 
 Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
 }
 const aprovados = ['Marco Luis', 'Antônio ', 'Pablo', 'André Luis']
 aprovados.forEach2(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
 })
console.log("The End.")