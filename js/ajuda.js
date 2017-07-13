(function(){
    $('#ajuda').click(function(){
        $.getJSON('http://ceep.herokuapp.com/cartoes/instrucoes', 
        function(ajudas){ajudas.instrucoes.forEach(function(instrucao){
        console.log(instrucao)
    
        
            ctrlCartao.adicionaCartao(instrucao.conteudo)
            
                })
            })
        })
    })()
