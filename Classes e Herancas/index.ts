class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) {}

    descricao(): string {
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salario: ${this.salario}`
    }
}

class Gerente extends Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number, public departamento: string) {
        super(nome, cargo, salario)
    }

    descricaoDetalhada():string {
        return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salario: ${this.salario}, Departamento: ${this.departamento} `
    }
    
}