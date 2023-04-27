function fArray(){
    var aluno1 = new Object();
    aluno1.ra = "003028123";
    aluno1.nome = "Jennifer Campos";
    alert("Forma 1\nra: "+aluno1.ra + "\nnome: "+aluno1.nome);

    var aluno2 = {};
    aluno2.ra = "00345454";
    aluno2["nome"] = "Gabriel Mariano"

    alert("Forma 2\nra: "+aluno2.ra + "\nnome: "+aluno2.nome);

    var aluno3 = {
        ra: "00312346",
        nome: "José da Silva"
    };

    alert("Forma 3\nra: "+aluno3.ra + "\nnome: "+aluno3.nome);

    //usando função construtura
    function aluno(ra,nome){
        this.ra = ra;
        this.nome = nome;

        this.mostraDados = function(){
            return "Forma 4\nra: "+this.ra+"\nnome: "+this.nome;
        }
    }
    var aluno4 = new aluno("125634","Luna Bruma");
    alert(aluno4.mostraDados());

    var aluno5 = {};
    var nome_prop = "ra";
    aluno5[nome_prop] = "1245454";
    aluno5['nome'] = "Bruma Luna";
    alert("Forma 5\nra: "+aluno5.ra+"\nnome: "+aluno5.nome);

    function fAluno(){
        var ra;
        var nome;

        this.setRA = function(value){
            this.ra = value;
        }

        this.getRa = function(){
            return this.ra;
        }

        this.setNome = function(value){
            this.nome = value;
        }

        this.getNome = function(){
            return this.nome;
        }
    }
    var aluno6 = new fAluno();
    aluno6.setNome("Ludo");
    aluno6.setRA("14545457");
    alert("Forma 6\nra: "+aluno6.getRa()+"\nnome: "+aluno6.getNome());

    //criando herança
    function alunoADS(){
        var numLab;

        this.setNumLab = function(value){
            this.numLab = value;
        }

        this.getNumLab = function(){
            return this.numLab;
        }

    }

    alunoADS.prototype = new fAluno();

    var aluno7 = new alunoADS();
    aluno7.setNome("Lobo");
    aluno7.setRA("14545412");
    aluno7.setNumLab("11");

    alert("Forma 7\nra: "+aluno7.getRa()+"\nnome: "+aluno7.getNome()+"\nsala: "+aluno7.getNumLab(x));

}