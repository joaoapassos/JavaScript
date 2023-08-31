// const Produto1 = {
//     id: 1,
//     nome: "Casaco Branco",
//     marca: "Zara",
//     preco: 70,
//     ImagemProduto: "product-1.jpg",
// };
// const Produto2 = {
//     id: 1,
//     nome: "Sobretudo",
//     marca: "Zara",
//     preco: 110,
//     ImagemProduto: "product-2.jpg",
// };`
// const cartaoProduto = `
// <div id="card-produto-1">
// <img src="./assets/img/${Produto1.ImagemProduto}" width="20%">
// <p>${Produto1.marca}</p>
// <p>${Produto1.nome}</p>
// <p>${Produto1.preco}</p>
// <button>Adicionar</button>
// </div>
// `;

const catalogo = [
    {
      id: 1,
      marca: "Zara",
      nome: "Camisa Larga com Bolsos",
      preco: 70,
      imagem: "product-1.jpg",
      feminino: false,
    },
    {
      id: 2,
      marca: "Zara",
      nome: "Casaco Reto com Lã",
      preco: 85,
      imagem: "product-2.jpg",
      feminino: true,
    },
    {
      id: 3,
      marca: "Zara",
      nome: "Jaqueta com Efeito Camurça",
      preco: 60,
      imagem: "product-3.jpg",
      feminino: false,
    },
    {
      id: 4,
      marca: "Zara",
      nome: "Sobretudo em Mescla de Lã",
      preco: 160,
      imagem: "product-4.jpg",
      feminino: false,
    },
    {
      id: 5,
      marca: "Zara",
      nome: "Camisa Larga Acolchoada de Veludo Cotelê",
      preco: 110,
      imagem: "product-5.jpg",
      feminino: false,
    },
    {
      id: 6,
      marca: "Zara",
      nome: "Casaco de Lã com Botões",
      preco: 170,
      imagem: "product-6.jpg",
      feminino: true,
    },
    {
      id: 7,
      marca: "Zara",
      nome: "Casaco com Botões",
      preco: 75,
      imagem: "product-7.jpg",
      feminino: true,
    },
    {
      id: 8,
      marca: "Zara",
      nome: "Colete Comprido com Cinto",
      preco: 88,
      imagem: "product-8.jpg",
      feminino: true,
    },
  ];

    for (const produtoCatalogo of catalogo){ // o 'of' = de, no caso de catalogo
    // No caso isso é uma função de repitição que percorre uma lista repetidas vezes até ela acabar
    // No caso ele monta a estrutura abaixo repetindas vezes ate acabar
    const cartaoProduto = `
    <div id="card-produto-1" >
    <img src="./assets/img/${produtoCatalogo.imagem}" width="20%">
    <p>${produtoCatalogo.marca}</p>
    <p>${produtoCatalogo.nome}</p>
    <p>$${produtoCatalogo.preco}</p>
    <button>Adicionar</button>
    </div>
    `; 
    
    
    document.getElementById('container-produto').innerHTML += cartaoProduto;

    }

    //document.getElementById('container-produto').innerHTML += cartaoProduto

// Usando a Crase = ``, é muito mais poderoso que as aspas para definir textos dentro do JS
// Dentro do ${} dá para chamar um variavel trazendo o que a dentro dela
// Usando o += acrescenta algo a mais no HTML
// Colocar o valor das variaveis dentro de uma só variavel que vai abrir [] e dentro tera os valores dentro de {}