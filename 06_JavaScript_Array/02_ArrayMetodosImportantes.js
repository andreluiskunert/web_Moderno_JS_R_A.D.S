console.log("=====> 02_Array: Metódos <=====")
 console.log("Explica....")
 ///  Exemplo:
  const pilotos =  ['Vettel', 'Alonso', 'Raikkonem', 'Massa']

    pilotos.pop()// Massa quebrou o carro de novo;
      console.log("Quais são os pitolos que tenho na lista?",pilotos,";")
        pilotos.push(' Verstappem')
         console.log("Quem entrou..?",pilotos,";")
          pilotos.shift()// remove o primeiro
           console.log('A lista de pilotos está assim...',pilotos , ";")
            pilotos.unshift('Ariton Senna ')
             console.log("O Brasil no Potio de novo", pilotos, ";")
             // adicionar
             pilotos.splice(2, 0, 'Bottas', 'Massas')
               console.log("A corrida  estão...", pilotos, ";")
             // Remover
              pilotos.splice(3, 1) // Massa quebrou :(
               console.log("A posição da corrida é ...", pilotos, ";")
        const algunsPilotos1 = pilotos.splice(2)// Novo Arrray
         console.log("Quais pilotos correm poera?",algunsPilotos1,";")
          const algunsPilotos2 = pilotos.splice(0, 4) 
           console.log("Os primeiros lugares..", algunsPilotos2, ";")
console.log("The End.")