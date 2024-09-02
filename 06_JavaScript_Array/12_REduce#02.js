console.log("====> Reduce #02<Array> <====")
 console.log("Explicar")
 // Quinta-feira de manhã {22/08/2025_06:00:00 a }
 const alunos = [
    {nome:'João', nota: 7.3, bolsista:false} ,
    {nome:'Maria', nota: 7.3, bolsista:true},
    {nome:'Pedro', nota: 7.3, bolsista:false},
    {nome:'Ana', nota: 7.3, bolsista:true}
   ] 
   // Desafio 01: Todos os alunos são bolsita?
     const todosBolsistas = (resultado, bolsista) => resultado && bolsista
      console.log("Todos aqui são  bolsitas?",alunos.map(a => a.bolsista).reduce(todosBolsistas))
   // Desafio 02: Algum é bolsista?
     const algumBolsista = (resultado, bolsista) => resultado || bolsista
      console.log("Tem algum bolsita aqui? ",alunos.map(a =>a.bolsista).reduce(algumBolsista))

console.log("The End.")