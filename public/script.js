let nome = prompt("Digite seu nome: ")
let renda = parseFloat(prompt("Qual sua renda mensal?: "))
while(isNaN(renda)){
    alert("Digite um numero.")
    renda = parseFloat(prompt("Qual sua renda mensal?: ")) 
}
let despesas = parseInt(prompt("Quantidade de despesas(1 a 5): "))
while(isNaN(despesas)){
    despesas = parseInt(prompt("Quantidade de despesas(1 a 5): "))
}
if(despesas>5){
    despesas = 5
}else{
    despesas = 1
}

let valorDespesa = 0
let soma = 0
for(i=0; i < despesas; i++){
    valorDespesa = parseFloat(prompt("Digite o valor da despesa[${despesas}]: "))
    soma += valorDespesa
}

if(despesas > renda){
    alert("⚠️ Atenção: você gastou mais do que ganhou.")
}else{
    let sobra = despesas - renda
    let percentual = renda * 0.3
    let aprovacao = ''
    if(sobra >= percentual){
        aprovacao = "✅ Ótimo: boa margem de sobra."
    }else{
         aprovacao = "🙂 Ok: dá para melhorar a sobra."
    }
}

alert(```
    Nome: ${nome}
    Renda: ${renda}
    Total despesas: ${soma}
    Sobra: ${sobra}
    Classificação ${aprovacao}


    ```)