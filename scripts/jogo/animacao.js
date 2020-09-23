class Animacao {
  constructor(
    matriz,
    image,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite
    ) {
      this.matriz = matriz;
      this.image = image;
      this.largura = largura;
      this.altura = altura;
      this.x = x;
      this.variacaoY = variacaoY;
      this.y = height - this.altura - this.variacaoY;
      this.larguraSprite = larguraSprite;
      this.alturaSprite = alturaSprite;
      
      this.frameAtual = 0;
  }
  
  exibe() {
    image(
      this.image,
      this.x,
      this.y,
      this.largura,
      this.altura,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.larguraSprite,
      this.alturaSprite
    );
    
    this.animacao();
  }
  
  animacao() {
    this.frameAtual++;
    
    if (this.frameAtual >= this.matriz.length - 1) {
      this.frameAtual = 0;
    }
  }
}