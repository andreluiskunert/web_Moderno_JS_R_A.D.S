console.log("=====> Funções Arrow#01 <====");
console.log("Explicar.....");
 let dobro = function(a) {
    return 2 *a
 }
 // assim....
   dobro = (a) =>{
    return 2 * a
   }
   // ou assim...
   dobro = a => 2 *a // return Implicito;
   console.log(dobro(Math.PI))
   let ola = function (){
    return 'Olá'
   }
    ola = () => 'Olá'
        ola =_=> 'Olá' // possui um parametro...
        console.log(ola())

console.log("The End.");
