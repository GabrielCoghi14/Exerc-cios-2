class ContaBancaria {
    constructor(public titular: string, public saldo: number){}

    exibirSaldo(): number{
        return this.saldo
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(public titular: string, public saldo: number, public limiteCredito: number){
        super(titular, saldo)
    }

    exibirSaldo(): number {
        return this.saldo + this.limiteCredito
    }
}