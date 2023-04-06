/*FORMA 1 -----------
var n1, n2
var soma, sub, prod, div, rest

n1 = parseFloat(prompt('Informe o primeiro número'))
n2 = parseFloat(prompt('Informe o segundo número'))

soma = n1 + n2
sub = n1 - n2
prod = n1 * n2
div = n1 / n2
rest = n1 % n2

alert('1º número: '+n1+'\n2º número: '+n2+'\n\nSoma: '+soma+'\nSubtração: '+sub+'\nProduto: '+prod+'\nDivisão: '+div+'\nResto: '+rest)*/

//FORMA 2 -------------

function enviar(){
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)

    soma = n1 + n2
    sub = n1 - n2
    prod = n1 * n2
    div = n1 / n2
    rest = n1 % n2

    return('1º número: '+n1+'\n2º número: '+n2+'\n\nSoma: '+soma+'\nSubtração: '+sub+'\nProduto: '+prod+'\nDivisão: '+ div.toFixed(2) +'\nResto: '+rest)
}