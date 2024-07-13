console.log("=======> Usando a Estrutra DO/WHILE <=======");
console.log("Explicar....");
/// Exemplo da aula passada:
function getInteiroAletorioEntre(max ,min){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
 }
   let opcao = 0;
    do  {
        opcao = getInteiroAletorioEntre(-1,  10)
         console.log(`Opção escolha foi ${opcao}`);
        }   while(opcao != -1)
     console.log("Até a próxima...")
console.log("The End.");
