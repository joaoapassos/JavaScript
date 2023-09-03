import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidade";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {
    //'0' é a chave : que recebe o valor 1
    //no caso está funcionando como um dicionario uma palavra é a chave e o valor é o significado
    // ?? significa se o anterior for errado o invalido passa para o proximo
};

function abrirCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[-360px]");
  document.getElementById("carrinho").classList.add("right-0");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");

  // chama-se o elemento da id 'carrinho' e pede para remover da lista de classes a classe 'right-[0px]'
  // repete a parte de chamar só que agora adiciona a classe 'right-[-360px]'
  // se fecha os () pq significa uma ação que acontece dentro
}

function irParaCheckout(){
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){// object.keys é uma função que se passa um objeto e ela retorna uma lista das chaves desse objeto e lenght que é tamanho da lista = a 0
        alert("Carrinho vazio");
        return;
    }
    window.location.href = "./checkout.html"; // aqui a janela do navegador pega o local do link = a origem dele + checkout.html que é o destino da pagina
}

export function inicializarCarrinho() {
  // esta exportando a função para que possa ser usada em outro arquivo JS
  const botaoFecharCarrinho = document.getElementById("fecharCarrinho");
  const botaoAbrirCarrinho = document.getElementById("abrirCarrinho");
  const botaoIrParaCheckout = document.getElementById("finalizar-compra");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
  botaoIrParaCheckout.addEventListener("click", irParaCheckout);

  // agora esta adicionando a constante que representa o botão que ele pode receber um evento
  // esse addEventListener recebe 2 parametros, qual é o evento, no caso 'click', e depois que recebe esse evento, no caso "fecharCarrinho"
}

function removerDoCarrinho(idProduto){
    delete idsProdutoCarrinhoComQuantidade[idProduto];
    renderizarProdutosCarrinho();
    atualizarPrecoCarrinho();
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);

}

function atualizarInformacaoQuantidade(idProduto){
    document.getElementById(`qtd-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
}
function incrementarQuantidadeProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto]++; // o ++ ele acrescenta uma unidade a mais
    atualizarInformacaoQuantidade(idProduto);
    atualizarPrecoCarrinho();
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
}
function decrementarQuantidadeProduto(idProduto){
    if(idsProdutoCarrinhoComQuantidade[idProduto] === 1){
        removerDoCarrinho(idProduto);
        atualizarPrecoCarrinho();
        salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto]--; // o -- ele aé oposto ao ++
    atualizarInformacaoQuantidade(idProduto);
    atualizarPrecoCarrinho();
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
}

function desenharProdutoNoCarrinho(idProduto){
    const produto = catalogo.find((p) => p.id === idProduto);// o produto recebe o catalogo que na lista é busca um produto p "=>" que tenha uma id igual a id do produto que eu recebi

    const containerProdutosCarrinho = document.getElementById('produtos-carrinho')


    // Nessa area eu vou fazer com que o js crie elementos html inves de apenas textos
    const elementoArticle = document.createElement('article');// aqui eu estou pedindo ao JS para criar um elemento article do zero e vazia
    const articleClasses = ['flex', 'bg-slate-200', 'text-slate-900', 'rounded-lg', 'h-[100px]', 'relative'];
    
    for(const articleClasse of articleClasses){
        elementoArticle.classList.add(articleClasse);
    }

    const cartaoProdutoCarrinho = 
`   <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-[100%] rounded-l-lg">
    <div class="h-[100%] w-[70%] flex flex-col justify-between p-3">
        <p class="text-slate-900 text-sm">${produto.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <button id="remover-item-${produto.id}" class="absolute top-1 right-2"><i class="fa-solid fa-circle-xmark"></i></button>
    <div class="flex items-end absolute bottom-0 right-2 p-2 text-lg">
        <button id="decrementar-produto-${produto.id}">-</button>
        <p id="qtd-${produto.id}" class="ml-2">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
        <button id="incrementar-produto-${produto.id}" class="ml-2">+</button>
    </div>`;

    elementoArticle.innerHTML = cartaoProdutoCarrinho; // apos o elemento ter sido criado e faço com que ele receba o texto que vai ser intendido como HTML

    containerProdutosCarrinho.appendChild(elementoArticle); //aqui agora ele faz com que o elemento junte mais um filho para dentro, ou seja coloque mais um conteudo desse article dentro 

    document.getElementById(`decrementar-produto-${produto.id}`)
    .addEventListener("click", () => decrementarQuantidadeProduto(produto.id));

    document.getElementById(`incrementar-produto-${produto.id}`)
    .addEventListener("click", () => incrementarQuantidadeProduto(produto.id));

    document.getElementById(`remover-item-${produto.id}`)
    .addEventListener("click", () => removerDoCarrinho(produto.id));
}

export function renderizarProdutosCarrinho(){
    const containerProdutosCarrinho = document.getElementById("produtos-carrinho");
    containerProdutosCarrinho.innerHTML = "";// apagando o carrinho
    
    for(const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoNoCarrinho(idProduto);
    }
}

export function adicionarAoCarrinho(idProduto) {
    if (idProduto in idsProdutoCarrinhoComQuantidade){ // in se a idProduto esta dentro da ids..
        incrementarQuantidadeProduto(idProduto);
        atualizarInformacaoQuantidade(idProduto);
        return;// serve para dizer que a função termina ali
    }
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    //idsProdutoCarrinhoComQuantidade[1] = 1 no caso a variavel está vazia então o js ele cria automaticamente o campo e adiciona na variavel

    desenharProdutoNoCarrinho(idProduto);
    atualizarPrecoCarrinho();
    salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
}

export function atualizarPrecoCarrinho(){
    const precoCarrinho = document.getElementById("preco-total");

    let precoTotal = 0;

    for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade){
        precoTotal += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * 
        idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
    }

    precoCarrinho.innerHTML = `Total: $${precoTotal}`;
}