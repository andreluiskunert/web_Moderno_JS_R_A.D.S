console.log("===> FlatMap <==")
 console.log("Explicar....")
 /// Explicar....
    console.log("Exemplo de Escola")
     const escola = [
        {
            nome: 'Turma M1',
            alunos: [
                {nome: 'Jean Cardoso',
                  nota: 9.1 
                },{

                nome: 'Lucas Camargo',
                nota: 9.1
                }
            ]
        }, {
          nome: 'Turma M2',
          alunos: [
            {
              nome: 'Luis Carlos',
              nota: 8.9
            }, {
              nome: 'André Luis',
              nota: 8.8
            }
          ]
        }
     ]
      const getNotaDoAluno = aluno => aluno.nota
       const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
        const nota1 = escola.map(getNotasDaTurma) 
         console.log("As notas da turma 01 são ", nota1, ";")
          Array.prototype.flatMap =  function(callback) {
            return Array.prototype.concat.apply([], this.map(callback))
          }
           const nota2 = escola.flatMap(getNotasDaTurma)
            console.log("As notas da turma 02  são ", nota2, ";")
      console.log("Revisando ... ")
console.log("The End.")