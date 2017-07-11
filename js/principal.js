var mural = document.querySelector('.mural')
var btn = document.querySelector('#mudaLayout')

btn.addEventListener('click', mudaLayout)


document.querySelector("#mudaLayout").addEventListener("click", function(){                 
//Pega o elemento com a class="mural"
 var mural = document.querySelector(".mural");
 //Tira ou coloca a classe
 mural.classList.toggle("mural--linha");
 //Muda o texto do botão
 if (mural.classList.contains("mural--linha")){
        this.textContent = "Blocos";
 } else {
        this.textContent = "Linhas";
 }
 });


var botoes = document.querySelectorAll(".opcoesDoCartao-remove");

for(var i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click", removeCartao);
}


function removeCartao(){
        var cartao = document.querySelector("#cartao_" + this.dataset.ref);
        //dá uma classe que faz ele sumir devagar
        cartao.classList.add("cartao--some");
        //tira da página depois da animação
        setTimeout(function(){
        },400);
        cartao.remove();
}