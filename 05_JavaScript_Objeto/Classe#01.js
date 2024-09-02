console.log("+++++++ mClasse #01 ++++++");
 console.log("Explicar como será....")
 // 1ª Exemplo:
  class lancamento {
       constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
          this.valor = valor
         }

  }
  // 2ª Exemplo:
    class CicloFinanceiro{
        constructor(mes, ano){
            this.mes = mes
             this.ano = ano
              this.lancamentos = []
        }
         addLancamentos(...lancamentos){
              lancamentos.forEach(l => this.lancamentos.push(l))
         }
         sumario(){
            let  valorConsolidado = 0 
             this.lancamentos.forEach(l => {
                 valorConsolidado += l.valor
             })
              return valorConsolidado
         }
    }
     const salario = new lancamento('salario', 45000) // Desenvolvedor Fustkell Alemã
       const contaDeCasa = new lancamento('Agua,luz,alugal,internet', -1500)
        const contas = new CicloFinanceiro(1, 2028)
         contas.addLancamentos(salario, contaDeCasa)
          console.log(" Me sobraria :",contas.sumario(),"R$ ,tirando os 1.500 para casa; ")
         
     
  console.log("The End")