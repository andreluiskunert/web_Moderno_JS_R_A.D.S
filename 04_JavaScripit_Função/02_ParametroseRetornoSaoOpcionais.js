console.log("===> Parametros e Retornos São Opcionais <==== ");
console.log("Explicar ......");
/// exemplo 01:
  function  area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area} m²;`)
    } else {
        return area
    }
  }
   console.log("O primeiro valor é ...." , area(2, 2),";");
   console.log("o segundo valor é ...",area(2),";");
   console.log("O terceiro valor é ....", area());
   console.log("O quarto valor é ....", area(2, 3, 17, 22, 41), ";");
   console.log("O quinto vlor é ....", area(5 ,5), ";");
console.log("The End.");
