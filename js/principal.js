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

function decideTipoCartao(conteudo){
    var quebras = conteudo.split("<br>").length;

    var totalDeLetras = conteudo.replace(/<br>/g," ").length;

    var ultimoMaior = " ";
    conteudo.replace(/<br>/g, " ")
            .split(" ")
            .forEach(function([palavra]){
                if (palavra.length > ultimoMaior.length){
                    ultimoMaior = palavra;
                }
            });
            var tamMaior = ultimoMaior.length;

            // no ultimo, todo cartao tem o testo pequeno
            var tipoCartao = "cartao--textoPequeno";
            if (tamMaior < 9 && quebras < 5 && totalDeLetras < 55){
                tipoCartao = "cartao--textoMedio";
            }
            return tipoCartao;
}

