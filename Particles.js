export default class Particles {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(5, 10);
    this.alpha = 200;
    this.xOff = random(-0.1, 1);
  }

  Update() {
    this.alpha -= 5;
    this.y -= 3;
    this.x += this.xOff;
  }
  Show() {
    noStroke();
    fill(100, this.alpha);  
    ellipse(this.x, this.y, this.size);
  }

  isVisible() {
    return this.alpha > 0;
  }
}
