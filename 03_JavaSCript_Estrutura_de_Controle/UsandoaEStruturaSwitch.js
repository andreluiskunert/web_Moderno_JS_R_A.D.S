console.log("====> Usando a Estrutura Switch <====");
console.log("Explica....");
  const imprimirResultado = function(nota){
    switch(Math.floor(nota)) {
        case 10:
             case 9:
                console.log("Quadro de Horna....")
                 break
                case 8 : 
                  case 7 :
                   console.log("Aprovaddo;");
                   break
                    case 6: 
                      case 5: 
                       case 4:
                         console.log("Recuperação;");
                         break
                          case 3: 
                           case 2:
                             case 1:
                                console.log("Reprovado;");
                                break
                                 default:
                                    console.log("Nota Invalida...")
                  }
   }
  imprimirResultado(10);
  imprimirResultado(8.9);
  imprimirResultado(2.3);
  imprimirResultado(-1);
  imprimirResultado(11);
console.log("The End.");