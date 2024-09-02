console.log("==> Filter#02 <==");
 console.log("Explicar")
 // 1ºExemplo:
  Array.prototype.filter2 = function(callback){
     const newArray =[]
      for(let i = 0; i < this.length; i++) {
        if(callback(this[i], )) {
            newArray.push(this[i])
         }
      }
      return newArray  
    }
 const produtos =[
    {nome: 'Notebook Lenovo', preco: 1799, fragil:true},
    {nome: 'Table Samung', preco: 799, fragil:true },
    {nome: 'Cardeno Grande', preco: 17.99, fragil:false},
    {nome: 'Kit de Canetas', preco: 27.99, fragil:false},
    {nome: 'KIt de Lapis', preco: 7.99, fragil:true}
 ]
   console.log(produtos.filter2(function(p){
    return false

   }))
    const caro = produto => produto.preco >= 500
     const fragil = produto => produto.fragil
     // Bora resolver ...
      console.log("Quais produtos são?",produtos.filter2(caro).filter2(fragil) ,";")
console.log("The End")
