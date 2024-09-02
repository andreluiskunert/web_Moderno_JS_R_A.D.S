 console.log(" ======>  04_ForEach#01 <========")
  console.log("Explicar como funciona....")
  console.log("Explicar e da alguns exemplos....") 
   const aprovados = ['Marco Luis', 'Antônio ', 'Pablo', 'André Luis']
     aprovados.forEach(function(nome, indice){
        console.log(`${indice +1}) ${nome}`)
     })
     console.log("====>Outro Exemplo")
     aprovados.forEach(nome => console.log(nome))
      const exibirAprovados = aprovado => console.log(aprovado)
      aprovados.forEach(exibirAprovados)
console.log("The End.")