const botaoAlterarTempo = document.getElementById
    ("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTempo = document.querySelector(".imagem-botao");

botaoAlterarTempo.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTempo.setAttribute("src", "./imagens/sun.png");
    }

    else {
        imagemBotaoTrocaDeTempo.setAttribute("src", "./imagens/moon.png");
    }

});