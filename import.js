let paragrafo = document.getElementsByTagName("p");
let primeiroParagrafo = paragrafo[0];
primeiroParagrafo.style.color = 'green';
document.body.style.background = 'black';


let email = document.getElementById("email");
let senha = document.getElementById("senha");
let botao = document.getElementById("botao");


function exibir(){
    alert(nome, senha)
}
function login(){
    if(nome.value === "@gmail.com" && senha.value.length > 4){
        botao.innerText = "Loading. . ."
        windo.open("https://g1.com.br/", '_blank');
    }
    else{
        botão.innerText = "Loading. . ."
    }
}