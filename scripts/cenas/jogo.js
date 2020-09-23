class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = config.mapa;
  }
  
  setup() {
    cenario = new Cenario(imageCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(
      config.configuracoes.vidaMaxima,
      config.configuracoes.vidaInicial
    );
    personagem = new Personagem(
      matrizPersonagem,
      imagePersonagem,
      0,
      30,
      110,
      135,
      220,
      270
    );
    const inimigoGotinha = new Inimigo(
      matrizInimigoGotinha,
      imageInimigoGotinha,
      width - 52,
      30,
      52,
      52,
      104,
      104,
      10
    );
    const inimigoTroll = new Inimigo(
      matrizInimigoTroll,
      imageInimigoTroll,
      width,
      0,
      200,
      200,
      400,
      400,
      15
    );
    const inimigoVoador = new Inimigo(
      matrizInimigoVoador,
      imageInimigoVoador,
      width - 52,
      200,
      100,
      75,
      200,
      150,
      10
    );
    inimigos.push(inimigoGotinha);
    inimigos.push(inimigoTroll);
    inimigos.push(inimigoVoador);
    
    somJogo.loop();
  }
  
  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somPulo.play();
    }
  }
  
  draw() {
    cenario.exibeCenario();
    cenario.moveCenario();
    
    vida.draw();

    pontuacao.exibePontuacao();
    pontuacao.adicionarPontos();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.moveInimigo();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVidas();
      personagem.ficaInvencivel();
      
      if (vida.vidas === 0) {
        noLoop();
        somJogo.stop();
        somGameOver.play();
        image(imageGameOver, width / 2 - 200, height / 4);
      }
    }
  }
}