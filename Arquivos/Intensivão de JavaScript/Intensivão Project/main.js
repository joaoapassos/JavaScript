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

import { inicializarCarrinho, atualizarPrecoCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho"; //Recebe a função exportada
import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtersCatalogo";

renderizarCatalogo();
inicializarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutosCarrinho();
inicializarFiltros();