function mostraJanelaFechada(obj){
    obj.src="janelafechada.png";
    var h1 = document.getElementById("titulo");
    h1.innerHTML = "Janela fechada";
}

function mostraJanelaAberta(obj){
    obj.src="janelaaberta.png";
    var h1 = document.getElementById("titulo");
    h1.innerHTML = "Janela aberta";
}

function mostraJanelaQuebrada(obj){
    obj.src="janelaquebra.png";
    var h1 = document.getElementById("titulo");
    h1.innerHTML = "Janela quebrada";
}