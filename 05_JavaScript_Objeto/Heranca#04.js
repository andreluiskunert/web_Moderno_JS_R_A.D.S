console.log(" =====> Herança #04 <====");
console.log("Explicar... ");
// 
 function meuObjeto(){
    console.log(meuObjeto.prototype)
 }
   const obj1 = new meuObjeto;
   const obj2 = new meuObjeto;
    // 
     console.log(obj1.__proto__=== obj2.__proto__)
     console.log(meuObjeto.prototype === obj1.__proto__)
      meuObjeto.prototype.nome = 'André Luis Kunert';
      meuObjeto.prototype.falar = function(){
        console.log(`Boa noite ! sr ${this.nome}, bora codar...`)
      }
      obj1.falar()
      obj2.nome = 'Luis André'
      obj2.falar()
    //
    const obj3 = {}
    obj3.__proto__ = meuObjeto.prototype
    obj3.nome = 'ALK'
    obj3.falar()
     //
      console.log((new meuObjeto).__proto__ === meuObjeto.prototype)
      console.log(meuObjeto.__proto__)
     console.log(Function.prototype.__proto__ === Object.prototype)
     console.log(Object.prototype.__proto__=== null)
console.log("The End.");
