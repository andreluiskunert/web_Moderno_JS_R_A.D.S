console.log("=====> Estrategias Criação De Objetos <=======");
console.log("Explicar.....");
// Usando notação Literal;
 const obj1= {}
  console.log("Objeto 1 = ",obj1,";");
 //Object em JS
  console.log("Aqui é uma ...",typeof Object, typeof new Object,";");
  const obj2 = new Object
  console.log("Aqui é o objeto 2...", obj2,";")
// Funções Construtoras:
   function Produto(nome, preco, desc){
    this.nome = nome
     this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
     }
   }
    const p1 = new Produto('Caneta', 7.99, 0.15)
    const p2 = new Produto('Notebook Lenovo', 1.799, 0.30)
    console.log("O valor do Produto nª01 é ...",p1.getPrecoComDesconto(),";")
    console.log("O valor do Produto nª02 é ...",p2.getPrecoComDesconto(),";")
// Funções Factory 
 function criarFuncionario(nome, salarioBase, faltas){
     return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
     }
 }
 const f1 = criarFuncionario('André Luis', 11500, 3)
 const f2 = criarFuncionario('Lucas Camargo', 8000, 2)
 const f3 = criarFuncionario('Jean Cardoso', 13000, 1) 
 const f4 = criarFuncionario('Luis Carlos', 7000, 2)
 console.log("O sr Luis Carlos recebera ..." ,f4.getSalario(),";")
 console.log("O sr Jean Cardoso recebera ..." ,f3.getSalario(),";")
 console.log("O sr Lucas Camargo recebera ..." ,f2.getSalario(),"")
 console.log("O sr André Luis  recebera ..." ,f1.getSalario(),"")
 // Object.create
   const filha = Object.create(null)
   filha.nome = 'Loana'
   console.log("o nome da filha do Irmão Lucas com a Irmãs Yamism será ....", filha,";")
   // Um função formosa que retorna Objeto...
     const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
     console.log(fromJSON.info)
 console.log("the End.");