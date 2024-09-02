console.log("======>  03_Simulando Array Com Objeto <=====")
 console.log("Explicar....")
  // Exemplo
   const quaseArray = {0:'Rafael', 1:'Ana Paula', 2:'Bia'}
    console.log("O que se encontra neste Array?", quaseArray, ";")
     Object.defineProperty(quaseArray, 'toString', {
        value: function(){
            return Object.values(this)
        },
         enumerable: false
     })
     console.log("quem é o primeiro?",quaseArray[0],";")
      const meuArray = ['Rafael', 'Ana Paula', 'Bia']
       console.log(quaseArray.toString(), meuArray)
console.log("The End")