console.log("=====> Funções Arrow #03 <=====");
console.log("Explicar...");
let ComprararComThis = function(param){
    console.log(this === param);
}
ComprararComThis(global); // Dentro do Node é verdadeiro...true
const obj = {}
ComprararComThis = ComprararComThis.bind(obj);
ComprararComThis(global);// Agora e Falso -> false
ComprararComThis(obj);// Agora é verdadeiro -> true
// 2ª exmplo:
let ComprararComThisArrow = param => console.log(this === param); // cada modulo do node executa separado
ComprararComThisArrow(global); // false -> falso;
ComprararComThisArrow(module.exports); // true -> verdadeiro:
ComprararComThisArrow = ComprararComThisArrow.bind(obj);
ComprararComThisArrow(obj);// false -> falso;
ComprararComThisArrow(module.exports);// true -> verddadeiro;


console.log("The End");
