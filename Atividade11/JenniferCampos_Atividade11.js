
function fRetangulo(base, altura){
    this.base = base;
    this.altura = altura;

    this.calcArea = function(){
        return "Base: "+base+"    |    Altura: "+altura+"\nA área do retângulo é: "+(base * altura);
    }
}

function callFunctionRet(){
    var vbase =  parseFloat(document.getElementById("base").value);
    var valtura = parseFloat(document.getElementById("altura").value);
    var calcRet = new fRetangulo(vbase,valtura);
    alert(calcRet.calcArea());
}

/*--------------------------------------------*/

function fConta(nmCorrent,banco,nrConta,saldo){
    this.nmCorrent = nmCorrent;
    this.banco = banco;
    this.nrConta = nrConta;
    this.saldo = saldo;

    this.setNmCorrent = function(value){
        this.nmCorrent = value;
    }

    this.getNmCorrent = function(){
        return this.nmCorrent;
    }

    this.setbanco = function(value){
        this.banco = value;
    }

    this.getbanco = function(){
        return this.banco;
    }

    this.setNrConta = function(value){
        this.nrConta = value;
    }

    this.getNrConta = function(){
        return this.nrConta;
    }

    this.setsaldo = function(value){
        this.saldo = value;
    }

    this.getsaldo = function(){
        return this.saldo;
    }
}

function hCorrente(saldoEspec){
    this.saldoEspec = saldoEspec;

    this.setSaldoEspc = function(value){
        this.saldoEspec = value;
    }

    this.getSaldoEspc = function(){
        return this.saldoEspec;
    }
}

function hPoupanca(juros,dt_vencimento){
    this.juros = juros;
    this.dt_vencimento = dt_vencimento;

    this.setJuros = function(value){
        this.juros = value;
    }

    this.getJuros = function(){
        return this.juros;
    }

    this.setDtVencimento = function(value){
        this.dt_vencimento = value;
    }

    this.getDtVencimento = function(){
        return this.dt_vencimento;
    }
}

hCorrente.prototype = new fConta();
hPoupanca.prototype = new fConta();

function callFunctionConta(){
    var nomeCorren = document.getElementById('nomeCor').value;
    var banco = document.getElementById('banco').value;
    var numConta = document.getElementById('numConta').value;
    var saldo = document.getElementById('saldo').value;
    var saldoEsp = document.getElementById('saldoEsp').value;
    var poupCJuros = document.getElementById('poupJuros').value;
    var dtVenc = document.getElementById('dtVenc').value;

    var cCorrente = new hCorrente();
    var cPoupanca = new hPoupanca();
    
    /*CONTA CORRENTE*/
    cCorrente.setNmCorrent(nomeCorren);
    cCorrente.setbanco(banco);
    cCorrente.setNrConta(numConta);
    cCorrente.setsaldo(saldo);
    cCorrente.setSaldoEspc(saldoEsp);

    /*CONTA POUPANÇA*/
    cPoupanca.setNmCorrent(nomeCorren);
    cPoupanca.setbanco(banco);
    cPoupanca.setNrConta(numConta);
    cPoupanca.setsaldo(saldo);
    cPoupanca.setJuros(poupCJuros);
    cPoupanca.setDtVencimento(dtVenc);

    
    alert("CONTA CORRENTE\nNome Correntista: "+cCorrente.getNmCorrent(nomeCorren)+
        "\nBanco: "+cCorrente.getbanco()+
        "\nNúmero da Conta: "+cCorrente.getNrConta()+
        "\nSaldo: R$"+cCorrente.getsaldo()+
        "\nSaldo Especial: R$"+cCorrente.getSaldoEspc()+
        "\n\nCONTA POUPANÇA\nNome Correntista: "+cPoupanca.getNmCorrent(nomeCorren)+
        "\nBanco: "+cPoupanca.getbanco()+
        "\nNúmero da Conta: "+cPoupanca.getNrConta()+
        "\nSaldo: R$"+cPoupanca.getsaldo()+
        "\nPoupança com Juros: R$"+cPoupanca.getJuros()+
        "\nData de Vencimento: "+cPoupanca.getDtVencimento());
}