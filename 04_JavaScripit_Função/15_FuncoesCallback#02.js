console.log("====> Funções Callback#02 <====");
console.log("Explicar...");
// 1ª Exemplo:
 const notas = [7.7,  8.8,  9.9, 10.0, 4.5, 5.5, 6.6] 
 // Sem callback
   let notasbaixas1 =[]
    for(let i in notas) {
        if(notas[i] < 7){
            notasbaixas1.push(notas[i])
        }
    }
   console.log("Notas baixas 01: ",notasbaixas1);
   // Usando Callback:
  const  notasbaixas2 = notas.filter(function(nota){
         return nota < 7
    })
   console.log("Notas baixas 02: ", notasbaixas2);
   // 2ª Exemplo:
    const notasMenorQue7 = nota => nota < 7
    const notasbaixas3 = notas.filter(notasMenorQue7)
    console.log("Notas menor que 7 são :",notasbaixas3);
console.log("The End.");