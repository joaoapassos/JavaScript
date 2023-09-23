let a, b, c;

a = 5;
b = 6;
c = 1;
let abc = a + b - c;
let text = " Ola mundo";
// o ";", é o que separa uma declaração da outra

document.getElementById("texto").innerHTML =+ abc + text;

document.
getElementById
('texto')
.innerHTML
=
"Isso não faz sentido mas funciona";
//Não importa quanto codigo seja quebrando dentro do js tudo é como uma linha de codigo ate vc colocar ;

// exitem os blocos de codigos que são definidos pelas {}

function a(){
    //aqui dentro é um bloco de codigo
    document.getElementById("texto").innerHTML =+ abc + text;
    document.getElementById("texto").innerHTML =+ abc + text;
    document.getElementById("texto").innerHTML =+ abc + text;
}

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements