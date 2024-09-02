console.log("======> Herança #06 <======")
 console.log("Explica....")
 // Exemplo 01
  function Aula(nome, videoID){
     this.nome = nome
      this.videoID =  videoID
  }
   const aula1 = new Aula('Me desculpe estamos fora do Ar por problemas técnicos..', 123 )
    const aula2 = new Aula('Em estamos lhe atendendo...', 456)
     console.log("Aula de Sistema da Informátição 08/09/2030", aula1 , ";")
     console.log("Sistema sendo atualizado....", aula2 , " ;")
// Exemplo 02
  // Simulando o new 
    function novo(f,...params){
        const obj = {}
          obj.__proto__ = f.prototype
           f.apply(obj, params)
           return obj
    }
     const aula3 = novo(Aula, 'Muito Obrigado por tua paciência...', 123 ,";")
      const aula4 = novo(Aula, 'Estamos felizes por vossas audencias...' , 456 , ';')
       console.log("Retormos ativdades de Aual de Sistemas da Infomação" , aula3, ",")
        console.log("Que fantastica aula...", aula4 , ";")
 console.log("The End")
  