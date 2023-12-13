

 
  


// Tamaño del lienzo (canvas)
let width = 1024;
let height = 600;

// Coordenadas de inicio para el enemigo
let x = width;
let y = height - 1;
let angles = [-110, -170]; // Ángulo del proyectil enemigo

// Coordenadas de inicio para el domo
let x0Dome = 0;
let y0Dome = height / 2 + 30;

// Velocidad, aceleración (gravedad)
let vDome = 90;
let v = 120;
let a = 9.81;

// Almacena los misiles del domo y del enemigo
let launcherVehicleDome = [];
let launcherVehicleEnemi = [];

// Número de lanzadores
let n = 3;

// Clase para representar partículas
class Particles {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(10, 15);
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
    fill(200, this.alpha);
    ellipse(this.x, this.y, this.size);
  }

  isVisible() {
    return this.alpha > 0;
  }
}

// Clase para representar misiles
class Missile {
  constructor(x0, y0, v0, a, teta, isEnemi) {
    this.x0 = x0;
    this.y0 = y0;
    this.v0 = v0;
    this.a = a;
    this.teta = teta;
    this.smokeTrail = [];
    this.t = 0;
    this.isEnemi = isEnemi;
  }

  // Rastrea la trayectoria del misil
  TrazarTrayectoria() {
    const isOutOfBounds = this.x < 0 || this.x > width;
    if (isOutOfBounds) {
      this.t = 0;
      this.y = this.isEnemi ? y0Dome : y;
      this.x = this.isEnemi ? x0Dome : x;
    }
    this.t += 0.1;
    return this.getPosition();
  }

  // Calcula la posición en un momento dado
  getPosition(time = this.t) {
    this.x = this.x0 + this.v0 * Math.cos(this.teta) * time;
    this.y =
      this.y0 +
      this.v0 * Math.sin(this.teta) * time +
      0.5 * this.a * Math.pow(time, 2);
    return [this.x, this.y];
  }

  // Genera partículas de humo
  getParticles() {
    this.smokeTrail.push(new Particles(this.x, this.y));
  }

  // Muestra el humo
  ShowSmoke() {
    this.getParticles();
    for (let i = this.smokeTrail.length - 1; i >= 0; i--) {
      this.smokeTrail[i].Update();
      this.smokeTrail[i].Show();
      if (!this.smokeTrail[i].isVisible()) {
        this.smokeTrail.splice(i, 1);
      }
    }
  }
}

// Función para lanzar misiles
const launchers = (numMissiles) => {
  let ammunitionEnemi = [];
  let ammunitionDome = [];

  for (let i = 0; i < numMissiles; i++) {
    const enemiMissile = new Missile(x, y, v, a, radians(random(angles[0], angles[1])), true);
    const domeMissile = new Missile(x0Dome, y0Dome, vDome, a, radians(random(angles[0], angles[1])), false);

    ammunitionEnemi.push(enemiMissile);
    ammunitionDome.push(domeMissile);
  }

  return [ammunitionDome, ammunitionEnemi];
};

// Función para verificar colisiones entre misiles
function checkCollisions() {
  for (let i = launcherVehicleDome.length - 1; i >= 0; i--) {
    const [xDome, yDome] = launcherVehicleDome[i].getPosition();
    const [xEnemi, yEnemi] = launcherVehicleEnemi[i].getPosition();
    const distance = dist(xDome, yDome, xEnemi, yEnemi);
    if (distance < 15) {
      launcherVehicleDome.splice(i, 1);
      launcherVehicleEnemi.splice(i, 1);
    }
  }
}

function setup() {
  createCanvas(width, height);
  bg = loadImage("bg.png");
  mexicanVehicle = loadImage("mexico.png");
  enemiVehicle = loadImage("enemigo.png");
  frameRate(60);

  [launcherVehicleDome, launcherVehicleEnemi] = launchers(n);
}

function draw() {
  background(5, 4, 11);
  // Dibuja las imágenes
  image(mexicanVehicle, -150, height / 2 + 50, mexicanVehicle.width / 2, mexicanVehicle.height / 2);
  image(enemiVehicle, width - 250, height / 3 + 50, enemiVehicle.width / 2, enemiVehicle.height / 2);

  for (let i = 0; i < launcherVehicleEnemi.length; i++) {
    const [xEnemi, yEnemi] = launcherVehicleEnemi[i].TrazarTrayectoria();
    launcherVehicleEnemi[i].ShowSmoke();
    fill(200, 200, 0);
    ellipse(xEnemi, yEnemi, 10, 10);
  }

  for (let i = 0; i < launcherVehicleDome.length; i++) {
    const [xF, yF] = launcherVehicleEnemi[i].getPosition();
    const [xDome, yDome] = launcherVehicleDome[i].getPosition();
    const angle = atan2(yF - yDome, xF - xDome);
    launcherVehicleDome[i].teta = angle;

    const [xDomeUpdated, yDomeUpdated] =
      launcherVehicleDome[i].TrazarTrayectoria();
    launcherVehicleDome[i].ShowSmoke();
    fill(255, 200, 0);
    ellipse(xDomeUpdated, yDomeUpdated, 10, 10);
  }

  checkCollisions();
  if (launcherVehicleDome.length === 0) {
    [launcherVehicleDome, launcherVehicleEnemi] = launchers(random(1, 3));
  }
}

 

