class Cenario {
  constructor(image, velocidade) {
    this.image = image;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }

  exibeCenario() {
    image(this.image, this.x1, 0, width, height);
    image(this.image, this.x2, 0, width, height);
  }

  moveCenario() {
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;

    if (this.x1 < -width) {
      this.x1 = width;
    }

    if (this.x2 < -width) {
      this.x2 = width;
    }
  }
}