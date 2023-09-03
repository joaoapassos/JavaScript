const catalogoProduto = document.getElementById('container-produto');

function esconderMasculinos(){
    exibirTodos();

    const produtosMasculinos = 
    Array.from(catalogoProduto.getElementsByClassName('masculino'));// Busca uma serie de classes dentro do elemento já especificado
    //array - lista .from de

    for(const produto of produtosMasculinos){
        produto.classList.add("hidden");
    }
}
function esconderFemininos(){
    exibirTodos();
    
    const produtosFeminino = 
    Array.from(catalogoProduto.getElementsByClassName('feminino'));// Busca uma serie de classes dentro do elemento já especificado
    //array - lista .from de

    for(const produto of produtosFeminino){
        produto.classList.add("hidden");
    }
}

function exibirTodos(){
    const produtosEscondidos = 
    Array.from(catalogoProduto.getElementsByClassName('hidden'));

    for (const produto of produtosEscondidos){
        produto.classList.remove('hidden')
    }
}

export function inicializarFiltros(){
    document.getElementById('exibir-feminino').addEventListener('click', esconderMasculinos);
    document.getElementById('exibir-masculino').addEventListener('click', esconderFemininos);
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos);
}