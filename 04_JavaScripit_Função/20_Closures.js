console.log("=====> Closures <===== ");
console.log("Explicar....");
// Contexto Lexico em ação:
  const x = 'Global';
   function fora(){
    const x = 'Local'
     function dentro(){
         return x
     }
     return dentro
   }
    const minhaFuncao =  fora()
     console.log(minhaFuncao());
console.log("The End.");