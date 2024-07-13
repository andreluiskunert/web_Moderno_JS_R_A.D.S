console.log("===> Usando a Estrutura IF/ELSE IF <=====");
 console.log("Explicar... ");
  Number.prototype.entre = function (incio, fim){
    return this >= incio && this <= fim
  }
  const imprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log("Quadro de Horna...");
   } else if(nota.entre(7 , 8.99)) {
    console.log("Aprovado...");
      } else if(nota.entre(4, 6.99)){
        console.log("Recuperação...")
      } else if(nota.entre(0, 3.99)) {
        console.log("Reprovado(a)")
      } else{
        console.log("Nota invalida...") 
      }
      console.log("FIM....")
  }
  imprimirResultado(10);
  imprimirResultado(8.9);
  imprimirResultado(2.3);
  imprimirResultado(-1);
  imprimirResultado(11);

   
 console.log("The End");
