console.log("=====> Funções Arrow#02 <====");
console.log("Explicar.....");
// => Exemplo usado no 08_ThiseaFuncaoBind#02.js
function Pessoa(){
    this.idade = 40
    //const self = this
    setInterval(( )=>{  // Arrow fantido...
        this.idade++
        console.log("A idade será :", this.idade ,";")
    }, 1000);
}
new Pessoa

console.log("The End.");