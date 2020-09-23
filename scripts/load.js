function preload() {
  imageCenario = loadImage('assets/imagens/cenario/floresta.png');
  imagePersonagem = loadImage('assets/imagens/personagem/correndo.png');
  imageInimigoGotinha = loadImage('assets/imagens/inimigos/gotinha.png');
  imageInimigoTroll = loadImage('assets/imagens/inimigos/troll.png');
  imageInimigoVoador = loadImage('assets/imagens/inimigos/gotinha-voadora.png');
  imageGameOver = loadImage('assets/imagens/fim/game-over.png');
  imgageVida = loadImage('assets/imagens/vidas/heart.png');
  imageTelaInicial = loadImage('assets/imagens/cenario/telaInicial.png');
  fonteTelaInicial = loadFont('assets/fonts/fonteTelaInicial.otf');
  config = loadJSON('config/config.json');
  somJogo = loadSound('https://raw.githubusercontent.com/LeandroSantosGit/hipsta/master/assets/sons/trilha_jogo.mp3');
  somPulo = loadSound('https://raw.githubusercontent.com/LeandroSantosGit/hipsta/master/assets/sons/somPulo.mp3');
  somGameOver = loadSound('https://raw.githubusercontent.com/LeandroSantosGit/hipsta/master/assets/sons/game-over.mp3');
}