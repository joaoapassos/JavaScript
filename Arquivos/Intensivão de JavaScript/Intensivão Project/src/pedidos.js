import { lerLocalStorage, desenharProdutoSimples } from "./utilidade";

function criarHistoricoDePedidos(pedidoComData){
    const elementoPedido = `
    <p class="text-xl text-bold my-4">${new Date (pedidoComData.dataPedido).toLocaleDateString('pt-BR', {hour: '2-digit', minute: '2-digit', })}</p> <!-- ele reformula o formato da data para o formato local ou formato pre definido -->
    <section id='container-pedidos-${pedidoComData.dataPedido}' class="bg-slate-300 p-3 w-[30%] rounded-lg">
    </section>
    `;
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += elementoPedido;

    for(const idProduto in pedidoComData.pedido){
        desenharProdutoSimples(idProduto, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto]);
    }
}

function renderizarHistoricoPedidos(){
    const historico = lerLocalStorage('historico');
    for(const pedidoComData of historico){
        criarHistoricoDePedidos(pedidoComData);
    }
}

renderizarHistoricoPedidos();