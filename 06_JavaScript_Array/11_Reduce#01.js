console.log("====> Reduce #01 <====")
 console.log("Explicar")
 // Quinta-feira de manhã {22/08/2025_06:00:00 a }
   const alunos = [
    {nome:'João', nota: 7.3, bolsista:false} ,
    {nome:'Maria', nota: 7.3, bolsista:false},
    {nome:'Pedro', nota: 7.3, bolsista:false},
    {nome:'Ana', nota: 7.3, bolsista:false}
   ] 
   console.log(alunos.map(a => a.nota))
    const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
         console.log(acumulador, atual)
          return acumulador + atual
    })
     console.log(resultado)
console.log("The End.")
