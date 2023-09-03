import { desenharProdutoSimples, lerLocalStorage, apagarDoLocalStorage, salvarLocalStorage } from "./utilidade";
import { atualizarPrecoCarrinho } from "./menuCarrinho";

function desenharProdutosCheckout(){
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};
    for(const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoSimples(idProduto, "container-produtos-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
    }
}

function finalizarCompra(evento){
    evento.preventDefault();// aqui estamos interrompendo a função padrão do forms que é enviar o formulario para algum lugar
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {};

    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
        return
    }

    const dataDeCompra = new Date();// montando o historico de produtos
    const pedidoFeito = {
        dataPedido: dataDeCompra,
        pedido: idsProdutoCarrinhoComQuantidade 
    }

    const historicoDePedidos = lerLocalStorage('historico') ?? [];
    const historicoDePedidosAtualizado = [pedidoFeito, ...historicoDePedidos]; // ... operador chamado espalhamento que tira os [] e os objetos se espalham
    // simplificando ele esta pegando a lista antiga desmontando ela e remontando ela + a lista nova bonitinho

    salvarLocalStorage('historico', historicoDePedidosAtualizado);
    apagarDoLocalStorage('carrinho');

    window.location.href = './pedidos.html';
}

desenharProdutosCheckout();
atualizarPrecoCarrinho();

document.addEventListener('submit', (evt) => finalizarCompra(evt));