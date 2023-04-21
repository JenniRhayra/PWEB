function maxNumber(n1,n2,n3){
    var maxNum = Math.max(n1,n2,n3);
    return(maxNum);
}

function descOrder(n1,n2,n3){
    var order = new Array(n1,n2,n3);
    order = order.sort((a,b)=> b - a);

    return(order);
}

function enviar(){
    var nmr1 = parseInt(document.getElementById("n1").value);
    var nmr2 = parseInt(document.getElementById("n2").value);
    var nmr3 = parseInt(document.getElementById("n3").value);

    return("O maior valor informado é: "+maxNumber(nmr1,nmr2,nmr3)+"\nOrdem Decrescente: "+descOrder(nmr1,nmr2,nmr3));

}