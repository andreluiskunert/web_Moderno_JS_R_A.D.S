console.log("===> Imperativo Vs Declarativo <===")
console.log("Explicar...")
 // Exemplo:
  const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Mária', nota: 9.2}
  ]
   // Imperativo:
    let total1 = 0
      for(let i =0; i <alunos.length; i++){
         total1 += alunos[i].nota
      }
       console.log("Usando a função Imperativo...", total1/alunos.length)
    // Declarativo
     const getNota = aluno => aluno.nota
      const soma = (total, atual) => total + atual
       const total2 = alunos.map(getNota).reduce(soma) // Função Declarativa... 
         console.log("Usando a função Declarativo...",total2/alunos.length)
        

console.log("The End.")