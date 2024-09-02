console.log("=> Filter#01 <=");
 console.log("Explicar")
 // 1ºExemplo:
  const produtos =[
    {nome: 'Notebook Lenovo', preco: 1799, fragil:true},
    {nome: 'Table Samung', preco: 799, fragil:true },
    {nome: 'Cardeno Grande', preco: 17.99, fragil:false},
    {nome: 'Kit de Canetas', preco: 27.99, fragil:false},
    {nome: 'KIt de Lapis', preco: 7.99, fragil:true}
 ]
   console.log(produtos.filter(function(p){
    return false

   }))
    const caro = produto => produto.preco >= 500
     const fragil = produto => produto.fragil
     // Bora resolver ...
      console.log("Quais produtos são?",produtos.filter(caro) ,";")
      // Rever os códigos depois de noite...
       
console.log("The End")
