let systems = []; 
let g; // gravity

function setup() {
  createCanvas(720, 400);
  g = createVector(0, 0.05); 
}

function draw() {
  background(51); 

  // systems 배열에 있는 모든 방출기 실행
  for (let s of systems) {
    s.applyGravity(g); 
    s.run(); 
  }
}

function mouseClicked() {
  let mPos = createVector(mouseX, mouseY); 
  systems.push(new Rain(mPos)); // 새로운 방출기 생성
  systems[systems.length - 1].addRaindrop(); // 해당 방출기에서 첫 물방울 추가
}





