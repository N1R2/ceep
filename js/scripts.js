
var mural = document.querySelector('.mural')
var btn = document.querySelector('#mudaLayout')

btn.addEventListener('click', mudaLayout)

function mudaLayout(){
    mural.classList.toggle('mural--linha') // toggle adiciona se nao tiver e se tiver ele remove
    if(mural.classList.contains('mural--linha')){
    btn.textContent = 'Bloco'

}else{
    btn.textContent = "Linha"
  }
}

btns = document.querySelectorAll('.btnRemove')

for(var i = 0; i < btns.length ; i ++){
    btns[i].addEventListener('click', removeCartao)
}

function removeCartao(){
   // console.log(this)
   var cartaoAtual = this.parentNode
   cartaoAtual.classList.add('cartao--some')
}
