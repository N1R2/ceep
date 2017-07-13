(function(){
var botoes = document.querySelectorAll(".opcoesDoCartao-remove");

for(var i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click", removeCartao);
}


function removeCartao(){
        var cartao = document.querySelector("#cartao_" + this.dataset.ref);
        //dá uma classe que faz ele sumir devagar
        cartao.classList.add("cartao--some")
        //tira da página depois da animação
        setTimeout(function(){
        },400);
        cartao.remove();
        $(document).trigger("precisaSincronizar")
}

window.removeCartao = removeCartao

})()

