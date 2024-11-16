let system;
let systems = [];

let g; //gravity
let wind;

function setup() {
  createCanvas(720, 400);
  // system = new rain(createVector(width / 2, 50));
  g = createVector(0,0.05);
  wind = createVector(0.03,-0.01);
}

function draw() {
  background(51);

  for (let s of systems) {
    s.addRaindrop();
    s.applyGravity(g);
    s.applyForce(wind);
    s.run();
  }

}

function mouseClicked(){
   let mPos = createVector(mouseX,mouseY)
   let system = new Rain(mPos);
   systems.push(system);

}




