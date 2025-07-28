let showMessage = false;
let messageAlpha = 0;

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
let offsetY = 50;
let particles = [];
let exploded = false;
let messageShown = false;

function setup() {
  let canvas = createCanvas(600, 800);
  canvas.parent('sketch-container');
  noStroke();
  background('#1f2573');
}

function draw() {
  background('#1f2573');

  if (particles.length > 0) {
    for (let p of particles) {
      p.update();
      p.show();
    }
    particles = particles.filter(p => !p.isDead());

    // if all particles gone, show message
    if (particles.length === 0 && exploded) {
      messageShown = true;
    }

  } else if (!exploded) {
    // draw the original music note
    for (let y = 0; y < musicNote.length; y++) {
      for (let x = 0; x < musicNote[y].length; x++) {
        if (musicNote[y][x] === "1") {
          fill('#db8ae2');
          rect(offsetX + x * pixelSize, offsetY + y * pixelSize, pixelSize, pixelSize);
        }
      }
    }
  }

  if (messageShown) {
  if (messageAlpha < 255) {
    messageAlpha += 3; // adjust this value to control fade speed
  }
  fill(219, 138, 226, messageAlpha); // #333 is rgb(51,51,51)
  textAlign(CENTER, CENTER);
  textSize(32);
  text("i'm glad you're here", width / 2, height / 2);
}
}

// Particle class
class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.3, 1.2));
    this.lifetime = 255;
  }

  update() {
    this.pos.add(this.vel);
    this.lifetime -= 2;
  }

  show() {
    fill('#db8ae2');
    fill(color('#db8ae2').levels[0], color('#db8ae2').levels[1], color('#db8ae2').levels[2], this.lifetime);
    rect(this.pos.x, this.pos.y, pixelSize, pixelSize);
  }

  isDead() {
    return this.lifetime <= 0;
  }
}

// On click, explode the note
function mousePressed() {
  if (!exploded) {
    for (let y = 0; y < musicNote.length; y++) {
      for (let x = 0; x < musicNote[y].length; x++) {
        if (musicNote[y][x] === "1") {
          let px = offsetX + x * pixelSize;
          let py = offsetY + y * pixelSize;
          particles.push(new Particle(px, py));
        }
      }
    }
    exploded = true;
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas('music-note', 'png');
  }
}