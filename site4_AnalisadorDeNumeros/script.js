let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res =document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100)
        return true
        else
            return false
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1)
        return true
        else
            return false 
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor (${num.value}) --> Adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido!!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Insira os valores antes de Finalizar!!')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for( let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p>Total de Números Cadastrados: ${total}<p>`
        res.innerHTML += `<p>Maior Valor Cadastrado: ${maior}<p>`
        res.innerHTML += `<p>Menor Valor Cadastrado: ${menor}<p>`
        res.innerHTML += `<p>Soma de Todos os Valores: ${soma}<p>`
        res.innerHTML += `<p>Média dos Valores: ${media}<p>`
    }
}