console.log("------- JSON vs Objeto -------")
 console.log("Explicar....")
 // 1ª Ex.:
   const obj = {a: 1, b:2, c: 3, soma(){return a + b + c }}
    console.log(JSON.stringify(obj))
    // console.log(JSON.parse("{a: 1, b:2, c:3}")) 
      // console.log(JSON.parse("{'a':1 , 'b': 2, 'c': 3 }"))
      console.log(JSON.parse('{"a": 1, "b":2, "c":3 }'))
       console.log(JSON.parse('{"a": 1.9, "b":"string", "c": true, "d": {}, "e": [] }'))

  console.log("The End.")