// let width = window.innerWidth - 10;
// let height = window.innerHeight - 10;

// class Proyectil {
//   constructor(x0, y0, v0, a, teta) {
//     this.t = 0;
//     this.x0 = x0;
//     this.y0 = y0;
//     this.a = a;
//     this.v0 = v0;
//     this.teta = teta;
//     this.positions = []; // Almacena las posiciones anteriores para crear la estela
//   }

//   lanzarProyectil() {
//     this.x = this.x0 + this.v0 * Math.cos(this.teta) * this.t;
//     this.y = this.y0 + this.v0 * Math.sin(this.teta) * this.t + 0.5 * this.a * this.t * this.t;
//     this.t += 0.1;

//     if (this.y >= height) {
//       this.t = 0;
//       this.y = this.y0;
//       this.x = this.x0;
//       this.positions = [];
//     }

//     // Almacena la posición actual en el arreglo de posiciones
//     this.positions.push({ x: this.x, y: this.y });

//     return [this.x, this.y];
//   }

//   dibujarEstela() {
//     noFill();
//     stroke(0, 50); // Color de la estela (negro con transparencia)
//     beginShape();
//     for (let pos of this.positions) {
//       vertex(pos.x, pos.y);
//     }
//     endShape();
//   }
// }
// class ParticulaHumo {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.size = random(5, 15); // Tamaño de las partículas de humo
//     this.alpha = 255; // Opacidad inicial
//     this.xOff = random(-1, 1); // Cambio aleatorio en la posición X
//   }

//   actualizar() {
//     this.alpha -= 2; // Disminuir la opacidad
//     this.y -= 1; // Mover hacia arriba (en sentido negativo en el eje Y)
//     this.x += this.xOff; // Mover ligeramente en la dirección X
//   }

//   mostrar() {
//     noStroke();
//     fill(100, this.alpha); // Color del humo y opacidad
//     ellipse(this.x, this.y, this.size);
//   }

//   estaVisible() {
//     return this.alpha > 0;
//   }
// }

// let ataque;
// let humo = [];
// function setup() {
//   createCanvas(width, height);
//   frameRate(60);

//   ataque = new Proyectil(0, height - 1, 200, 9.8, radians(-45));
// }

// function draw() {
//   background(220);
//   ataque.lanzarProyectil();
//   ataque.dibujarEstela();
//   if (frameCount % 5 === 0) {
//     // Crear nuevas partículas de humo a intervalos regulares
//     let humoParticle = new ParticulaHumo(random(width), height);
//     humo.push(humoParticle);
//   }
//   for (let i = humo.length - 1; i >= 0; i--) {
//     humo[i].actualizar();
//     humo[i].mostrar();

//     if (!humo[i].estaVisible()) {
//       // Eliminar partículas de humo invisibles
//       humo.splice(i, 1);
//     }
//   }
//   const [x, y] = ataque.lanzarProyectil();
//   fill(0);
//   ellipse(x, y, 20, 20);
// }
 
// let width = window.innerWidth - 10;
// let height = window.innerHeight - 10;

// class Proyectil {
//   constructor(x0, y0, v0, a, teta) {
//     this.t = 0;
//     this.x0 = x0;
//     this.y0 = y0;
//     this.a = a;
//     this.v0 = v0;
//     this.teta = teta;
//     this.positions = []; // Almacena las posiciones anteriores para crear la estela
//   }

//   lanzarProyectil() {
//     this.x = this.x0 + this.v0 * Math.cos(this.teta) * this.t;
//     this.y = this.y0 + this.v0 * Math.sin(this.teta) * this.t + 0.5 * this.a * this.t * this.t;
//     this.t += 0.1;

//     if (this.y >= height) {
//       this.t = 0;
//       this.y = this.y0;
//       this.x = this.x0;
//       this.positions = [];
//     }

//     // Almacena la posición actual en el arreglo de posiciones
//     this.positions.push({ x: this.x, y: this.y });

//     return [this.x, this.y];
//   }

//   dibujarEstela() {
//     noFill();
//     stroke(0, 50); // Color de la estela (negro con transparencia)
//     beginShape();
//     for (let pos of this.positions) {
//       vertex(pos.x, pos.y);
//     }
//     endShape();
//   }
// }

// class ParticulaHumo {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.size = random(5, 10); // Tamaño de las partículas de humo (más grandes)
//     this.alpha = 200; // Opacidad inicial (un poco más alta)
//     this.xOff = random(-0.1, 1); // Cambio aleatorio en la posición X (menos dispersión)
//   }

//   actualizar() {
//     this.alpha -= 5; // Disminuir la opacidad (más rápido)
//     this.y -= 3; // Mover hacia arriba (en sentido negativo en el eje Y)
//     this.x += this.xOff; // Mover ligeramente en la dirección X (menos dispersión)
//   }

//   mostrar() {
//     noStroke();
//     fill(100, this.alpha); // Color del humo y opacidad
//     ellipse(this.x, this.y, this.size);
//   }

//   estaVisible() {
//     return this.alpha > 0;
//   }
// }

// let ataque;
// let humo = [];

// function setup() {
//   createCanvas(width, height);
//   frameRate(60);

//   ataque = new Proyectil(0, height - 1, 137, 9.8, radians(-45));
// }

// function draw() {
//   background(220);
//   ataque.lanzarProyectil();
//   //ataque.dibujarEstela();

//   if (frameCount % 1 === 0) {
//     // Crear más frecuentemente nuevas partículas de humo
//     let humoParticle = new ParticulaHumo(ataque.x, ataque.y);
//     humo.push(humoParticle);
//   }

//   for (let i = humo.length - 1; i >= 0; i--) {
//     humo[i].actualizar();
//     humo[i].mostrar();

//     if (!humo[i].estaVisible()) {
//       // Eliminar partículas de humo invisibles
//       humo.splice(i, 1);
//     }
//   }

//   fill(0);
//   const [x, y] = ataque.lanzarProyectil();
//   ellipse(x, y, 20, 20);
// }
let width = window.innerWidth - 10;
let height = window.innerHeight - 10;

class Proyectil {
  constructor(x0, y0, v0, a, teta) {
    this.t = 0;
    this.x0 = x0;
    this.y0 = y0;
    this.a = a;
    this.v0 = v0;
    this.teta = teta;
    this.positions = []; // Almacena las posiciones anteriores para crear la estela
  }

  lanzarProyectil() {
    this.x = this.x0 + this.v0 * Math.cos(this.teta) * this.t;
    this.y = this.y0 + this.v0 * Math.sin(this.teta) * this.t + 0.5 * this.a * this.t * this.t;
    this.t += 0.1;

    if (this.y >= height) {
      this.t = 0;
      this.y = this.y0;
      this.x = this.x0;
      this.positions = [];
    }

    // Almacena la posición actual en el arreglo de posiciones
    this.positions.push({ x: this.x, y: this.y });

    return [this.x, this.y];
  }

  dibujarEstela() {
    noFill();
    stroke(0, 50); // Color de la estela (negro con transparencia)
    beginShape();
    for (let pos of this.positions) {
      vertex(pos.x, pos.y);
    }
    endShape();
  }
}

class ParticulaHumo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(5, 10); // Tamaño de las partículas de humo (más grandes)
    this.alpha = 200; // Opacidad inicial (un poco más alta)
    this.xOff = random(-0.1, 1); // Cambio aleatorio en la posición X (menos dispersión)
  }

  actualizar() {
    this.alpha -= 5; // Disminuir la opacidad (más rápido)
    this.y -= 3; // Mover hacia arriba (en sentido negativo en el eje Y)
    this.x += this.xOff; // Mover ligeramente en la dirección X (menos dispersión)
  }

  mostrar() {
    noStroke();
    fill(100, this.alpha); // Color del humo y opacidad
    ellipse(this.x, this.y, this.size);
  }

  estaVisible() {
    return this.alpha > 0;
  }
}

class MisilEnemigo {
  constructor(x0, y0, v0, a, teta) {
    this.x = x0;
    this.y = y0;
    this.explotando = false;
    this.proyectil = new Proyectil(x0, y0, v0, a, teta);
  }

  lanzarProyectil() {
    if (!this.explotando) {
      const [x, y] = this.proyectil.lanzarProyectil();
      fill(255, 0, 0); // Color del proyectil enemigo
      ellipse(x, y, 10, 10);

      // Deja su propia estela
      this.proyectil.dibujarEstela();
    }
  }

  explotar() {
    this.explotando = true;
  }

  estaExplotando() {
    return this.explotando;
  }

  obtenerPosicion() {
    return { x: this.x, y: this.y };
  }
}

class MisilAmigo {
  constructor(x0, y0) {
    this.x = x0;
    this.y = y0;
    this.explotando = false;
    this.objetivo = null;
    this.proyectil = null;
  }

  asignarObjetivo(objetivo) {
    this.objetivo = objetivo;
    if (objetivo) {
      const objetivoPos = objetivo.obtenerPosicion();
      const angulo = atan2(objetivoPos.y - this.y, objetivoPos.x - this.x);
      this.proyectil = new Proyectil(this.x, this.y, 150, 9.8, angulo);
    }
  }

  tieneObjetivo() {
    return this.objetivo !== null;
  }

  obtenerObjetivo() {
    return this.objetivo;
  }

  lanzarProyectil() {
    if (this.objetivo && !this.explotando) {
      const [x, y] = this.proyectil.lanzarProyectil();
      fill(0, 0, 255); // Color del proyectil amigo
      ellipse(x, y, 10, 10);

      const d = dist(x, y, this.objetivo.x, this.objetivo.y);
      if (d < 10) {
        this.objetivo.explotar();
        this.explotar();
      }
    }
  }

  explotar() {
    this.explotando = true;
  }

  estaExplotando() {
    return this.explotando;
  }
}

let ataque;
let humo = [];
let misilesEnemigos = [];
let misilesAmigos = [];

function setup() {
  createCanvas(width, height);
  frameRate(60);

  ataque = new Proyectil(0, height - 1, 137, 9.8, radians(-45));

  // Crear 10 misiles enemigos
  for (let i = 0; i < 10; i++) {
    let x0 = width;
    let y0 = random(height - height / 2, height);
    let v0 = random(100, 137);
    let a = 9.8;
    let teta = radians(random(-125, -145));
    let misil = new MisilEnemigo(x0, y0, v0, a, teta);
    misilesEnemigos.push(misil);
  }

  // Crear 10 misiles amigos
  for (let i = 0; i < 10; i++) {
    let x0 = 0;
    let y0 = height - 1;
    let misil = new MisilAmigo(x0, y0);
    misilesAmigos.push(misil);
  }
}

function draw() {
  background(220);

  // Dibuja misiles enemigos y verifica si han sido interceptados
  for (let i = misilesEnemigos.length - 1; i >= 0; i--) {
    misilesEnemigos[i].lanzarProyectil();

    for (let j = misilesAmigos.length - 1; j >= 0; j--) {
      if (misilesAmigos[j].tieneObjetivo()) {
        const objetivo = misilesAmigos[j].obtenerObjetivo();
        const d = dist(objetivo.x, objetivo.y, misilesEnemigos[i].x, misilesEnemigos[i].y);
        if (d < 10) {
          misilesEnemigos[i].explotar();
          misilesAmigos[j].explotar();
        }
      }
    }
  
    // Dibuja misiles amigos y verifica si han explotado
    for (let i = misilesAmigos.length - 1; i >= 0; i--) {
      misilesAmigos[i].lanzarProyectil();
    }
  
    // Lanza proyectiles del bando amigo
    ataque.lanzarProyectil();
  
    // Dibuja la respuesta del bando amigo (ataque)
    if (frameCount % 1 === 0) {
      // Crear más frecuentemente nuevas partículas de humo
      let humoParticle = new ParticulaHumo(ataque.x, ataque.y);
      humo.push(humoParticle);
    }
  
    for (let i = humo.length - 1; i >= 0; i--) {
      humo[i].actualizar();
      humo[i].mostrar();
  
      if (!humo[i].estaVisible()) {
        // Eliminar partículas de humo invisibles
        humo.splice(i, 1);
      }
    }
  
    // Dibuja el bando amigo (ataque)
    fill(0);
    const [x, y] = ataque.lanzarProyectil();
    ellipse(x, y, 20, 20);
  }
  
}