var idade = new Array();
var sexo = new Array();
var opiniao = new Array();
var i = 1;
var conta_pessimo = 0;
var conta_bom = 0;
var conta_otimo = 0;

function media(){
    var aux = 0;
    var soma = 0;
    for(var x=0;x<arguments.length;x++){
        aux = idade[x];
        soma += aux;
    }

    return(soma / arguments.length);
}

function count_woman(){
    var contaf = 0;
    for(var x=0;x<arguments.length;x++){
        contaf = sexo[x]=="f"? contaf+1:contaf+0;
    }
    return(contaf);
}

function count_man(){
    var contam = 0;
    for(var x=0;x<arguments.length;x++){
        contam = sexo[x]=="m"? contam+1:contam+0;
    }
    return(contam);
}


function enviar(){
    var idade_v = parseInt(document.getElementById("idade").value);
    var selectSex = document.querySelector('#sexo');
    var sexoValue = selectSex.options[selectSex.selectedIndex].value;
    var selectOpiniao = document.querySelector("#opiniao");
    var opiniaoValue = selectOpiniao.options[selectOpiniao.selectedIndex].value;
    var maxAge;
    var minAge;

    idade.push(idade_v);
    sexo.push(sexoValue);

    switch (opiniaoValue) {
        case '1':
            conta_pessimo +=1;
        break;
        case '2':
        break;
        case '3':
            conta_bom += 1 ;
        break;
        case '4':
            conta_otimo +=1;
        break;
    } 

    maxAge = Math.max.apply(null,idade);
    minAge = Math.min.apply(null,idade);
    alert("RESULTADOS:\nMédia da idade das pessoas: "+media.apply(null,idade)+
    "\nIdade da pessoa mais velha: "+maxAge+
    "\nIdade da pessoa mais nova: "+minAge+
    "\nPessoas que responderam péssimo: "+conta_pessimo+
    "\nNúmero de mulheres: "+count_woman.apply(null,sexo)+
    "\nNúmero de homens: "+count_man.apply(null,sexo)+
    "\nPorcentagem de pessoas que responderam ótimo e bom: "+(((conta_bom+conta_otimo)/idade.length)*100).toFixed(1)+"%"+
    "\nInputs: "+i);

    if(i === 3){
        alert("Número máximo atingido ("+i+"). Fechando...");
        close();
    }

    i++;
}