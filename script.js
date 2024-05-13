function toggleMode() {
    const html = document.documentElement       // Aqui estou pegando o html
    html.classList.toggle("light-mode")         // Aqui estou fazendo a troca das classes

    // toggle resume todo a código abaixo
    // if (html.classList.contains('light-mode')) {     <- Condicional, Se for True
    // html.classList.remove('light-mode')              <- light mode será removido (a classe será removida)
    // }
    // else {                                           <- Se não
    // html.classList.add('light-mode')                 <- light-mode será adicionado
    // }

    // Mudança de imagem dependendo do Modo (Dark or Light)
    // Tenho que pegar a tag img
    const img = document.querySelector("#profile img")  // querySelector = é uma função que se traduz em: Pesquisa pelo Seletor, o argumento que vai dentro é o mesmo seletor CSS. Aqui eu já peguei a imagem, está aqui.

    // Substituir a imagem
    if (html.classList.contains('light-mode')) { 
    // Se light-mode estiver ativo (se a classe light-mode for True), adicionar imagem(foto) light.
        img.setAttribute('src', './Avatar - Light.png') // setAttrite = Modificar/Ajustar um atributo, no caso da img (imagem). O atributo que quero modificar é o src.
        img.setAttribute('alt', 'Foto de Isaac Rodrigues tema claro')
    }
    // Se tiver sem o light-mode, manter a imagem normal (padrão, que no caso é a imagem Dark)

    else  {                                             // <- Se não
        img.setAttribute('src', './Avatar - Dark.png')  // setAttrite = Modificar/Ajustar um atributo, no caso da img (imagem). O atributo que quero modificar é o src.
        img.setAttribute('alt', 'Foto de Isaac Rodrigues tema escuro')
    }
}