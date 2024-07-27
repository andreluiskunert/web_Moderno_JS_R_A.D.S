console.log("===> This  e a Função Bind#02 <===");
console.log("Explica....");
function Pessoa(){
    this.idade = 40
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}
new Pessoa


console.log("The End.")