console.log("  => Herança #01 <=");
console.log("Explica....");
// é o principio da OO para não usando ficar CTRL + C & CTRL V ----
const ferrari = {
     modelo: 'F40',
     velMax: 324
}
 const Volvo ={
    modelo:'V40',
    velMax:200
 }
 console.log("Ferrari ...",ferrari.prototype)

   console.log("Ferrari ...",ferrari.__proto__)
    console.log("Ferrari ...",ferrari.__proto__===Object.prototype)
     console.log("Volvo...",Volvo.__proto__)
      console.log("Volvo...",Volvo.__proto__===Object.prototype)
       console.log(Object.prototype.__proto__===null)
   // último Exemplo:
     function MeuObjeto() {}
      console.log(typeof Object, typeof MeuObjeto)
       console.log(Object.prototype, MeuObjeto.prototype)

console.log("The End.");
