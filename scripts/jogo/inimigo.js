class Inimigo extends Animacao {
  constructor(
    matriz,
    image,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
    velocidade
    ) {
      super(
        matriz,
        image,
        x,
        variacaoY,
        largura,
        altura,
        larguraSprite,
        alturaSprite
      );
      this.velocidade = velocidade;
      this.x = width;
    }
  
  moveInimigo() {
    this.x = this.x - this.velocidade;
  }
  
  aparece() {
    this.x = width;
  }
}