export const catalogo = [
    {
    id: "1",
    marca: "Zara",
    nome: "Camisa Larga com Bolsos",
    preco: 70,
    imagem: "product-1.jpg",
    feminino: false,
    },
    {
    id: "2",
    marca: "Zara",
    nome: "Casaco Reto com Lã",
    preco: 85,
    imagem: "product-2.jpg",
    feminino: true,
    },
    {
    id: "3",
    marca: "Zara",
    nome: "Jaqueta com Efeito Camurça",
    preco: 60,
    imagem: "product-3.jpg",
    feminino: false,
    },
    {
    id: "4",
    marca: "Zara",
    nome: "Sobretudo em Mescla de Lã",
    preco: 160,
    imagem: "product-4.jpg",
    feminino: false,
    },
    {
    id: "5",
    marca: "Zara",
    nome: "Camisa Larga Acolchoada de Veludo Cotelê",
    preco: 110,
    imagem: "product-5.jpg",
    feminino: false,
    },
    {
    id: "6",
    marca: "Zara",
    nome: "Casaco de Lã com Botões",
    preco: 170,
    imagem: "product-6.jpg",
    feminino: true,
    },
    {
    id: "7",
    marca: "Zara",
    nome: "Casaco com Botões",
    preco: 75,
    imagem: "product-7.jpg",
    feminino: true,
    },
    {
    id: "8",
    marca: "Zara",
    nome: "Colete Comprido com Cinto",
    preco: 88,
    imagem: "product-8.jpg",
    feminino: true,
    },
    ];



    //document.getElementById('container-produto').innerHTML += cartaoProduto

// Usando a Crase = ``, é muito mais poderoso que as aspas para definir textos dentro do JS
// Dentro do ${} dá para chamar um variavel trazendo o que a dentro dela
// Usando o += acrescenta algo a mais no HTML
// Colocar o valor das variaveis dentro de uma só variavel que vai abrir [] e dentro tera os valores dentro de {}

export function salvarLocalStorage(chave, informacao){  //Salvar a informações num banco local do navegador
    localStorage.setItem(chave, JSON.stringify(informacao)); // JSON.stringify está transformando o objeto informacao em texto ou melhor string
}

export function apagarDoLocalStorage(chave){
    localStorage.removeItem(chave);
}

export function lerLocalStorage(chave){ 
    return JSON.parse(localStorage.getItem(chave)); // JSON.parse faça o oposto ele transforma para objeto
}


export function desenharProdutoSimples(idProduto, idContainerHtml, quantidadeProduto){
    const produto = catalogo.find((p) => p.id === idProduto);// o produto recebe o catalogo que na lista é busca um produto p "=>" que tenha uma id igual a id do produto que eu recebi

    const containerProdutosCarrinho = document.getElementById(idContainerHtml);


    // Nessa area eu vou fazer com que o js crie elementos html inves de apenas textos
    const elementoArticle = document.createElement('article');// aqui eu estou pedindo ao JS para criar um elemento article do zero e vazia
    const articleClasses = ['flex', 'bg-stone-200', 'text-slate-900', 'rounded-lg', 'h-[100px]', 'relative', 'mb-2'];
    
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
    <div class="flex items-end absolute bottom-0 right-2 p-2 text-lg">
        <p id="qtd-${produto.id}" class="ml-2">${quantidadeProduto}</p>
    </div>`;

    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
}
