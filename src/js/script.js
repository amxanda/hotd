const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.img');
const infos = document.querySelectorAll('.info');

botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    //botao
    const botaoSelecionado = document.querySelector('.selecionado');

    botaoSelecionado.classList.remove('selecionado');
    botao.classList.add('selecionado');

    //imagens
    const imagemAtiva = document.querySelector('.img.ativa');

    imagemAtiva.classList.remove('ativa');
    imagens[indice].classList.add('ativa');

    //conteudo
    const infoAtiva = document.querySelector('.info.ativa');

    infoAtiva.classList.remove('ativa');
    infos[indice].classList.add('ativa');
  });
});