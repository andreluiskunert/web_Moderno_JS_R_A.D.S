console.log("=====> Parâmetro Padrão <===");
console.log("Explicar.....");
   // 1ªEstrategia:
function soma1(a, b, c){
   a = a || 1
   b = b ||1
   c = c || 1
   return a + b + c
}
 console.log("A valores de soma1 é ",soma1(), soma1(3), soma1(1, 2, 3),";");
 // 2ª Estrategia...
   function soma2(a, b, c){
      a = a == undefined ? a : 1
      b = 1 in arguments ? b : 1
      c = isNaN(c) ? 1 : c
      return a + b + c
    }
    console.log("A valores de soma2 é ",soma2(), soma2(3), soma2(1, 2, 3),";");
 // 3ª EStrategia:
  function soma3( a = 1, b = 1, c = 1){
    return a + b + c
  }
  console.log("A valores de soma3 é ",soma3(), soma3(3), soma3(1, 2, 3),";");
    
console.log("The End.");
