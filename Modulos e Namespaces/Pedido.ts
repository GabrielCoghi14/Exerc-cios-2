import { Cliente } from "./Cliente";

    export class Pedido extends Cliente{
        constructor(public nome: string, public email: string, public cliente: string, public produto: string, public valor: number){
            super(nome, email)
        }
    }