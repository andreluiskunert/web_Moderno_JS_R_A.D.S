console.log("=====> Usando a Estrutura WHILE <====");
console.log("Explicar...");
 function getInteiroAletorioEntre(max ,min){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
 }
   let opcao = 0;
     while(opcao != -1){
        opcao = getInteiroAletorioEntre(-1,  10)
         console.log(`Opção escolha foi ${opcao}`);
     }
     console.log("Até a próxima...")
 console.log("The End.");
