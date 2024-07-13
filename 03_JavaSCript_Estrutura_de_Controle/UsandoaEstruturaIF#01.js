console.log("===> Usando a Estrutura #01 <===");
console.log("Explicar ...");
 console.log("Exemplo 01:");
 function soboaNoticia(nota){
 if(nota >= 7){
    console.log("Parabéns pela conquista...Aprovado com" , nota, ";");
     }
 }
   soboaNoticia(8.1);
    soboaNoticia(6.1);
   console.log("Exemplo 02:");
   function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade...'+ valor+ ";");
       }
   }
    seForVerdadeEuFalo();
     seForVerdadeEuFalo(null);
      seForVerdadeEuFalo(undefined);
       seForVerdadeEuFalo(NaN);
        seForVerdadeEuFalo(0);// único valor que é falso para essa função...
         seForVerdadeEuFalo(-1);
          seForVerdadeEuFalo(' ');
           seForVerdadeEuFalo('?');
            seForVerdadeEuFalo([]);
             seForVerdadeEuFalo([5, 7]);
              seForVerdadeEuFalo({});

        




console.log("The End.");