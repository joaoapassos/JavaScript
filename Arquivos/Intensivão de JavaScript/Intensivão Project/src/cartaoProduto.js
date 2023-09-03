import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidade";

export function renderizarCatalogo(){
for (const produtoCatalogo of catalogo){ // o 'of' = de, no caso de catalogo
    // No caso isso é uma função de repitição que percorre uma lista repetidas vezes até ela acabar
    // No caso ele monta a estrutura abaixo repetindas vezes ate acabar
    const cartaoProduto = `
    <div id="card-produto-${produtoCatalogo.id}" class=" shadow-xl shadow-stone-500 rounded-lg w-60 m-2 flex flex-col p-2 justify-between group 
    ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}"> 
    <!-- Nesse $ esta começando a colocar um filter de masculino e feminino 
    e o ? esta servindo como um IF de uma linha só onde se for verdadeiro ele pega a 1° opção se não ele pega a 2°-->
    
    <img src="./assets/img/${produtoCatalogo.imagem}" alt="Produto 1" class="my-3 rounded-lg group-hover:scale-105 duration-[0.3s]" />
    <p class="">${produtoCatalogo.marca}</p>
    <p class="">${produtoCatalogo.nome}</p>
    <p class="">$${produtoCatalogo.preco}</p>
    <button class="bg-slate-950 text-stone-200 hover:bg-slate-700 rounded-md"
    id="adicionar-${produtoCatalogo.id}"><i class="fa-solid fa-cart-plus"></i></button>
    </div>
    `; 
    
    
    document.getElementById('container-produto').innerHTML += cartaoProduto;
    document.getElementById(`adicionar-${produtoCatalogo.id}`)// eu posso criar uma id variavel

    }
    for (const produtoCatalogo of catalogo){
        document.getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
    }// () => adicionarAoCarrinho(produtoCatalogo.id) aqui diz que os () => antes da função diz que ela deve agir como se não tivesse nada entre os () mas na frente dela ela ainda consegue levar o id

}