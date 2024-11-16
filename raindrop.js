class Raindrop{
    constructor(position){
        this.acceleration = createVector(0, 0.5);
        this.velocity = createVector(random(-1, 1), random(-1, 0));
        this.position = position.copy();
        this.lifespan = 255;
        this.w = 2;
        this.hasSpawned = false;
    }

    run(){
        this.update();
        this.display();
    }

    applyForce(force){
        this.acceleration.add(force);
    }

    update(){
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.lifespan -= 2;

        this.acceleration.set(0,0);

        if (this.position.y >= height - this.w / 2) {
            this.position.y = height - this.w / 2; 
            this.velocity.y *= -0.6; 
          
            // 바닥에 닿으면 방출기가 생성되어 새로운 물방울 방출
            if (!this.hasSpawned) {
              this.hasSpawned = true;
              let system = new Rain(this.position); // 새로운 방출기 생성
              systems.push(system); // 시스템 배열에 추가
              system.addRaindrop(); // 새로 생성된 방출기에서 물방울 추가
            }
          }
          
    }

    display(){    
        stroke(200, this.lifespan);
        strokeWeight(2);
        fill(127, this.lifespan);
        ellipse(this.position.x, this.position.y, this.w, this.w);

    }

    isDead(){
        return this.lifespan < 0;
    }


}


