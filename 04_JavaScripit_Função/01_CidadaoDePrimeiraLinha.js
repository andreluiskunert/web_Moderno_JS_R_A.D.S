console.log("===> Cidadão de Primeira Linha <=== ");
console.log("Explicar  o assunto sobre Função...");
//  criar de forma literal:
 function fun1(){ } 
 // Armazenar em uma variavel:
 const fun2 =  function() {}
  // Armazenar em um array:
   const array = [function (a, b) {return a + b }, fun1, fun2]
   console.log(" Q resultado da questão: const array = [function (a, b) {return a + b }] é ", array[0](2, 5 ), ";");
 // Armazenar em um objeto:
   const obj = {}
    obj.falar = function() { return 'Borar Codar em JavaScript...'};
     console.log("O que vamos fazer agora? programador web ,", obj.falar() , ";");
  // Função para outra ...
    function run (fun){
        fun()
    }
    run(function (){console.log("Borar Megular no JS")});
    // Retorna a função...
      function soma (a, b ){
        return function (c){
            console.log("Qual é o valor da soma de {a + b + c }" , a + b + c, ";");
        }
      }
      soma(2, 4)(1);
      // Mais exmplo de função:
       const CincoMais = soma(2, 4)
       CincoMais(2);




console.log("The End.");
