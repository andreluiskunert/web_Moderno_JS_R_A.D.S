console.log("===> Usando a Estrutura Break Continue <===");
console.log("Explicar....");
console.log("Break:");
 const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  for(x in nums){
     if(x == 5) // break
     {
        break
     }
     console.log(`${x} = ${nums[x]}; `);
      }
console.log("Continue:");
  for(y in  nums){
    if(y == 5)  // continue
        {
        continue
    }
    console.log(`${y} = ${nums[y]}`);

  }
  console.log("Rotulo com Break:");
    externo:  for(a in nums) {
        for (b in nums){
            if(a == 2 && b == 3)break externo
            console.log(`Par = ${a}, ${b}`);
        }
    }
   console.log("Não...por favor....")
console.log("The End") ;
