console.log("===> Getters / Setters <====");
console.log("Explica.....");
// Exempolo:
// Getters -> Ler
    // Setters -> Escrever;
    const sequencia ={
        _valor:1,// convenção
        get valor() {return this._valor++},
        set valor(valor){ 
            if(valor > this._valor){
                this._valor = valor
            }
        }
    }
    console.log(sequencia.valor, sequencia.valor);
    sequencia.valor = 1000
    console.log(sequencia.valor, sequencia.valor);
     sequencia.valor = 900
     console.log(sequencia.valor, sequencia.valor);



console.log("The End.")