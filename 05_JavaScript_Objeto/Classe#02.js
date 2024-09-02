console.log("-----> Classe #02 <------")
 console.log("Explicar...")
 // exemplo:
    class avo{
        constructor(sobrenome){
            this.sobrenome = sobrenome
        }
    }
     class pai extends avo {
        constructor(sobrenome, profissao = 'Programador'){
            super(sobrenome)
             this.profissao = profissao
        }
     }
       class Filho extends pai {
         constructor(){
            super('Kunert')
          }
    }
     const filho = new Filho
      console.log(filho)


  console.log("The End.")