let musicNote = [
  "00000000110000000000", 
"00000001111000000000", 
"00000011001100000000", 
"00000010001100000000", 
"00000010011100000000", 
"00000010111000000000", 
"00000010110000000000", 
"00000011100000000000", 
"00000111100000000000", 
"00001111000000000000", 
"00011101000000000000", 
"00111001000000000000", 
"00110001000000000000", 
"01100011111000000000", 
"01100111111100000000", 
"01101100100110000000", 
"01101100110110000000", 
"00100110010110000000", 
"00110011011100000000", 
"00011000011000000000", 
"00000111111000000000", 
"00000011101000000000", 
"00011000001000000000", 
"00111100001000000000", 
"00111100011000000000", 
"00011000110000000000", 
"00001111000000000000", 
"00000000000000000000",
];

let pixelSize = 20;
let offsetX = 100;
let offsetY = 20;
let particles = [];

function setup() {
  let canvas = createCanvas(400, 600); // adjust size if needed
  canvas.parent("gallery-content"); // attaches canvas to your <div id="gallery-content">
  noStroke();
}

function draw() {
  background(255);

  if (particles.length > 0) {
    for (let p of particles) {
      p.update();
      p.show();
    }
    particles = particles.filter(p => !p.isDead());
  } else {
    // Draw the music note normally
    for (let y = 0; y < musicNote.length; y++) {
      for (let x = 0; x < musicNote[y].length; x++) {
        if (musicNote[y][x] === "1") {
          fill(0);
          rect(offsetX + x * pixelSize, offsetY + y * pixelSize, pixelSize, pixelSize);
        }
      }
    }
  }
}

// Particle class
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(1, 4));
    this.lifetime = 255;
  }

  update() {
    this.pos.add(this.vel);
    this.lifetime -= 4;
  }

  show() {
    fill(0, this.lifetime);
    rect(this.pos.x, this.pos.y, pixelSize, pixelSize);
  }

  isDead() {
    return this.lifetime <= 0;
  }
}

// When you click, explode all pixels
function mousePressed() {
  for (let y = 0; y < musicNote.length; y++) {
    for (let x = 0; x < musicNote[y].length; x++) {
      if (musicNote[y][x] === "1") {
        let px = offsetX + x * pixelSize;
        let py = offsetY + y * pixelSize;
        particles.push(new Particle(px, py));
      }
    }
  }
}