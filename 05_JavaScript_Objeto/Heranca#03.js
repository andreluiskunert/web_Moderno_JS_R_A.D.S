console.log("===> Herança #03 <===")
  console.log("Explica,,,")
   const pai = {nome: 'Lucas Camargo', corCabelo:'preto'}
   const filho1 = Object.create(pai)
     filho1.nome = 'Willian'
      console.log("Qual é a cor do cabelo do  filho do irmão Lucas Camargo? é ", filho1.corCabelo,"o irmão Willian ;")
      const filho2 = Object.create(pai,{
        nome: {  value:'João ',writable:false, enumerable:true}
      })
      console.log("Qual é a cor do cabelo do  filho do irmão Lucas Camargo? é ", filho2.corCabelo,"o irmão João ;")
       filho2.nome = 'Elias'
        console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)
         console.log(Object.keys(filho1))
         console.log(Object.keys(filho2))
         // 
          for(let key in filho2){
            filho2.hasOwnProperty(key)? console.log(key) : console.log(`Por herança ${key};`)
          }
   console.log("the End .")