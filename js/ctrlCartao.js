var ctrlCartao = (function(){

    // Extrair o total de post-its existentes
    var contador = $(".cartao").length;

    function adicionaCartao(conteudo){

        // Criar elementos do cartão (de trás para frente) e adicionar no DOM
   

        // Incrementar o contador para evitar repetição
        contador++
      // Criar botão de remover
      var botaoRemove = $("<button>").addClass("opcoesDoCartao-opcao")
                                     .addClass("opcoesDoCartao-remove")
                                     .attr("data-ref", contador)
                                     .text("Remover")
                                     .click(removeCartao)

      // Criar <div> de opções
      var opcoes = $("<article>").addClass("opcoesDoCartao")
                             .append(botaoRemove)

      // cod add da pag 66 chamando func decideTipoCartao
      var tipoCartao = decideTipoCartao(conteudo)


      var conteudoTag = $("<p>").addClass("cartao-conteudo")
                                .append(conteudo)

      // Adição do mural é feita antes do cartão e seu conteúdo
      $("<article>").attr("id","cartao_" + contador)
                .addClass("cartao")
                // cod add da pag 66 - add classe no novo cartao
                .addClass(tipoCartao)
                .append(opcoes)
                .append(conteudoTag)
                .prependTo(".mural")

    }
    return {
        adicionaCartao : adicionaCartao
    }
})()
