interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = "dinheiro" | "cartao" | "pix";

function gerarMensagem(produto: Produto, pagamento: FormaPagamento): string{
    return `Produto: ${produto.nome}, Preco: ${produto.preco}, Categoria: ${produto.categoria}`
}