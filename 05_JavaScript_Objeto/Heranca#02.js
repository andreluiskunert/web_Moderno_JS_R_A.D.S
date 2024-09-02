console.log("==> Herança #02 <==");
console.log("Explica....");
// cadeia de protopy 
console.log("1º Exemplo");
Object.prototype.Attr0 = 'Bisavo' // faça isso em casa 
 const avo = {Attr1: 'Avo'}
  const pai ={__proto__:avo, Attr2: 'Pai'}
   const filho = {__proto__:pai, Attr3: 'Filho'}
    // testando:
    console.log("O filho tem ...",filho.Attr0)
     console.log('O filho tem..',filho.Attr1)
      console.log("O filho tem ...",filho.Attr2)
       console.log("O filho tem ...",filho.Attr3)
 console.log("2º Exemplo:") 
    const carro = {
        velAtual:0,
        velMax:200,
        acelerarMais(delta){
            if(this.velAtual + delta <= this.velMax) {
                this.velAtual += this.velMax
            } else {
                this.velAtual = this.velMax
            }
        },
        status(){
            return `${this.velAtual} km/h de ${this.velMax} km/h`
        }
    }
     const ferrari = {
        modelo: 'F40',
        velMax: 324 // Shadowing que assombreamento do atribuito "Carro"
     }
     const  Lamborghini ={
        modelo: 'aventador',
         status(){
            return `${this.modelo} : ${super.status()}`
         }
     }
     Object.setPrototypeOf(ferrari, carro)
      Object.setPrototypeOf(Lamborghini, carro)
       console.log("Ferrari é ....",ferrari)
         console.log(" Lamborghini é ....",Lamborghini)
        console.log("Bora colocar as crianças para correr....")
         Lamborghini.acelerarMais(100)
          console.log("Saiu a  Lamborghini ", Lamborghini.status())
           ferrari.acelerarMais(300)
            console.log("saiu a Ferrari ",ferrari.status())
      
     

     console.log("The End.");
