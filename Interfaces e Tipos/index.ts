type Pessoa = {
    nome: string;
    idade: number;
}

type Empregado = {
    empresa: string;
    salario: number;
}

type PessoaEmpregado = Pessoa & Empregado;

function dados(pessoaempregado: PessoaEmpregado): string{
    return `Nome: ${pessoaempregado.nome}, Idade: ${pessoaempregado.idade}, Empresa: ${pessoaempregado.empresa}, Salario: ${pessoaempregado.salario}`
}