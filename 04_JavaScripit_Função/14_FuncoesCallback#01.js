console.log("====> Funções Callback#01 <====");
console.log("Explicar...");
// 1ª Exemplo:
  const fabricantes = ['Mercedes', 'Audi', 'BMW']
   function imprimir(nome, indice){
    console.log(`${indice +1}. ${nome}`)
   }
    fabricantes.forEach(imprimir);
    // 2ª exemplo:
    fabricantes.forEach(fabricante => console.log(fabricante))
console.log("The End.");