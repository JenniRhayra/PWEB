function validar(){
    if(document.forms.form1.nome.value == "" || document.forms.form1.nome.length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.form1.nome.focus();
        return false;
    };

    if(document.forms.form1.email.value == "" || document.forms.form1.email.value.indexOf('@') == -1 || document.forms.form1.email.value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.form1.email.focus();
       return false;
    }

    if(document.forms.form1.elements[2].value == "" || document.forms.form1.elements[2].value.length < 20) {
        alert("É necessario preencher o campo COMENTÁRIO com mais de 20 caracteres!");
        document.forms.form1.elements[2].focus();
        return false;
    }

    if(document.forms.form1.sim.checked === true){
        alert("Volte sempre à está página!");
    }
    else if(document.forms.form1.nao.checked === true){
        alert("Que bom que você voltou a visitar esta página!");
    }
    
    document.forms.form1.reset();
    window.location.reload()
}

function limpar(){
    document.forms.form1.reset();
}