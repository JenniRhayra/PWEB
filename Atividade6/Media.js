/* FORMA 1 DE FAZER --------------------
var nome;
var nota1, nota2, nota3, media;

nome = prompt('Qual o nome do aluno?')
nota1 = parseFloat(prompt('Informe a nota 1'))
nota2 = parseFloat(prompt('Informe a nota 2'))
nota3 = parseFloat(prompt('Informe a nota 3'))


media = (nota1 + nota2 + nota3) / 3

alert('A média do(a) aluno(a) '+nome+' é '+media.toFixed(2))*/

//FORMA 2 DE FAZER ----------------------
function enviar(){
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var media = (nota1 + nota2 + nota3) / 3

    return('A média do(a) aluno(a) '+nome+' é '+media.toFixed(2))
}