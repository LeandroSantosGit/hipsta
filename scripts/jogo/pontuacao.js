class Pontuacao {
  constructor() {
    this.pontos = 0;
  }
  
  exibePontuacao() {
    textSize(50);
    fill('#fff');
    textAlign(RIGHT);
    text(parseInt(this.pontos), width - 30, 50);
  }
  
  adicionarPontos() {
    this.pontos = this.pontos + 0.2;
    
  }
}