 
export default class Proyectil {
  constructor(x0 , y0, v0, a, teta) {
    this.x0 = x0;
    this.y0 = y0;
    this.v0 = v0;
    this.a = a;
    this.teta = teta;
    this.smokeTrail = [];
  }

  TrazarTrayectoria() {
    if (this.y >= height) {
      this.t = 0;
      this.y = 0;
      this.x = 0;
    }
    return this.getPosition();
  }

  getPosition(time = this.t) {
    this.x = this.x0 + this.v0 * Math.cos(this.teta) * time;
    this.y =
      this.y0 +
      this.v0 * Math.sin(this.teta) * time +
      0.5 * this.a * Math.pow(time, 2);
    return [this.x, this.y];
  }
  getParticles() {
    return this.smoke.push(new Particles(this.x, this.y));
  }

  ShowSmoke() {
    this.smokeTrail = this.getParticles();
    for(i= this.smokeTrail.length-1 ; i>= 0; i++){
        this.smokeTrail[i].Update();
        this.smokeTrail[i].Show();
        if(!this.smokeTrail[i].isVisible()){
            this.smokeTrail.splice(i, 1);
        }
    }
  }
}
export function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}
