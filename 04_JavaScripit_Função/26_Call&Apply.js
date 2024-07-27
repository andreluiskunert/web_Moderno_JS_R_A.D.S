console.log("====> Call & Apply <===");
console.log("Explicar....");
/// Função Sem Call & Apply
   function getPreco(imposto = 0, moeda = 'R$'){
        return `${moeda} ${this.preco * (1 - this.desc) *(1 + imposto) }`
   }
    const produto= {
        nome : 'Notebbook Lenovo GAMIMG03',
        preco: 5.350,
        desc: 0.15,
        getPreco
    }
    global.preco =  5.350,
    global.desc= 0.15
     console.log("O preço do Notebbook Lenovo GAMIMG03 é",produto.getPreco(),";");
     console.log(getPreco())

   // Com Call & Apply:
      const MotorHome = { preco: 150.000, desc: 0.20}
       console.log("Pelo MOtorhome...quanto preciso para realizar esse sonho: ", getPreco.call(MotorHome),";");
       console.log("Pelo MOtorhome...quanto preciso para realizar esse sonho: ", getPreco.apply(MotorHome),";");
       // Em dolar:
       console.log("Pelo MOtorhome...quanto preciso para realizar esse sonho: ", getPreco.call(MotorHome, 0.17, `$`),";");
       console.log("Pelo MOtorhome...quanto preciso para realizar esse sonho: ", getPreco.apply(MotorHome, [0.15, `$`]),";");



console.log("The End.");
