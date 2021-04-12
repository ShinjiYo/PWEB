
function conta(){
    var nome, banco, numConta, saldo;
    this.getNome = function(){
        return nome;
    };
    this.getBanco = function(){
        return banco;
    }
    this.getNumConta = function(){
        return numConta;
    };
    this.getSaldo = function(){
        return saldo;
    }
    this.setNome = function(n){
        nome = n;
    };
    this.setBanco = function(b){
        banco = b;
    };
    this.setNumConta = function(num){
        numConta = num;
    }
    this.setSaldo = function(s){
        saldo = s;
    }
}

function contaCorrente(){
    var saldoEspecial;
    this.getSaldoEspecial = function(){
        return saldoEspecial;
    };
    this.setSaldoEspecial = function(valor){
        saldoEspecial = valor;
    };
}

function contaPoupanca(){
    var juros;
    var dataVencimento;
    this.getJuros = function(){
        return juros;
    };
    this.setJuros = function(valor){
        juros = valor;
    };
    this.setDataVencimento = function(data){
        dataVencimento = data;
    }
    this.getDataVencimento = function(){
        return dataVencimento;
    }
}

contaCorrente.prototype = new conta();
contaPoupanca.prototype = new conta();

nContaCorrente = new contaCorrente();
nContaPoupanca = new contaPoupanca();

nContaCorrente.setNome("Matheus");
nContaCorrente.setBanco("Banco do Brasil");
nContaCorrente.setNumConta("15499");
nContaCorrente.setSaldo(1548.12);
nContaCorrente.setSaldoEspecial(8745.54);

alert("Conta corrente: \nNome: " + nContaCorrente.getNome() + "\nBanco: " + nContaCorrente.getBanco() + "\nNúmero da Conta: "
 + nContaCorrente.getNumConta() + "\nSaldo: " + nContaCorrente.getSaldo() + "\nSaldo Especial: " + nContaCorrente.getSaldoEspecial());


 nContaPoupanca.setNome("Amanda");
nContaPoupanca.setBanco("Caixa");
nContaPoupanca.setNumConta("8949");
nContaPoupanca.setDataVencimento("10/10/2021");
nContaPoupanca.setJuros("10%");

alert("Conta Poupança:\nNome: " + nContaPoupanca.getNome() + "\nBanco: " + nContaPoupanca.getBanco()
 + "\nNúmero da conta: " + nContaPoupanca.getNumConta()
 + "\nData de Vencimento: " + nContaPoupanca.getDataVencimento() + "\nJuros: " + nContaPoupanca.getJuros());


