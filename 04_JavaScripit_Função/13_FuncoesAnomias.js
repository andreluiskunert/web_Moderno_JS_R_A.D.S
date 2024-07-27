console.log("=====> Funções Anônimas <=====");
console.log("Explicar...");
 const soma= function(x, y){
    return x = y
 }
 const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
 }
  imprimirResultado(3, 4);
  imprimirResultado(3, 5, soma);
  imprimirResultado(2, 4, function(x, y){
    return x - y
  })
 imprimirResultado(3, 4, (x , y) => x * y);
  const programadorWeb = {
     falar: function(){
        console.log('Borar Codar com JS no VScode...')
     }
  }
  programadorWeb.falar()

console.log("The End");
