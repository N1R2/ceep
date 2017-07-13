(function(){

// Adicionar cartão à pagina
$(".novoCartao").submit(function(event) {
// Impedir recarregamento da página
event.preventDefault()

// Capturar texto digitado no <textarea>
var campoConteudo = $(".novoCartao-conteudo")
var conteudo = campoConteudo.val().trim().replace(/\n/g,"<br>")

 if (conteudo) {
    ctrlCartao.adicionaCartao(conteudo)
    $(document).trigger("precisaSincronizar");

    

    // Limpar o conteúdo do <textarea>
    campoConteudo.val("")
 }

  })

  })()