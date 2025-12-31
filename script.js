// Definimos a função que foi chamada lá no botão do HTML
function startSurprise() {
    
    // 1. Pegamos os elementos da tela pelo ID
    const telaInicial = document.getElementById('start-screen');
    const telaPrincipal = document.getElementById('main-content');
    const musica = document.getElementById('bg-music');

    // 2. Manipulamos as classes CSS
    // Adiciona a classe .hidden na tela inicial (ela vai sumir suavemente por causa do CSS transition)
    telaInicial.classList.add('hidden');
    
    // Remove a classe .hidden da tela principal (ela vai aparecer)
    telaPrincipal.classList.remove('hidden');

    // 3. Tocamos a música
    // Navegadores bloqueiam som automático. Por isso precisamos desse clique do usuário para liberar o áudio.
    musica.play();
}