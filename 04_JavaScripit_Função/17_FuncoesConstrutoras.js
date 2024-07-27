console.log("===> Funções Construtoras <===");
console.log("Explicar.....");
// 1ª Exemplo:
  function carro(velocidadeMaxima = 200, delta = 5){
    /// Atributo Privado:
    let velocdadeAtual = 0
     // metodo publica:
        this.acelerar = function(){
            if(velocdadeAtual + delta <= velocidadeMaxima) {
                velocdadeAtual += delta
            } else{
                velocdadeAtual = velocidadeMaxima
            }
        }
        // metodo publico 02
         this.getVelocidadeAtual = function(){
            return velocdadeAtual
         }
  }
   const uno = new carro
   uno.acelerar()
    console.log(uno.getVelocidadeAtual())
    //
     const ferrari = new carro(350, 20)
     ferrari.acelerar()
     ferrari.acelerar()
     ferrari.acelerar()

     console.log(ferrari.getVelocidadeAtual())
     console.log(typeof carro)
     console.log(typeof ferrari)
console.log("The End.");
