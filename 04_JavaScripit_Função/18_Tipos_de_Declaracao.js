console.log("====> Tipos de Declaração <===");
console.log("Explicar...");
   // respostas:
     console.log("Soma"+ soma(3, 4))
      /* console.log("Subtração:", sub(3, 5))
       console.log("Multiplicação:"+ mult(3, 9)) */
  // function declaration:
    function soma(x, y){
        return x + y
    }
  // function expression:
    const sub = function(w, k){
        return w - k    
    }
    console.log("Subtração:", sub(3, 5))
  // named function expression:
   const mult = function mult(a, b){
     return a * b
   }
   console.log("Multiplicação:"+ mult(3, 9))
   // 
console.log("The End.");
