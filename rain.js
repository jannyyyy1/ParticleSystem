class Rain {
constructor(position){
    this.origin = position.copy();
    this.raindrops = [];
}

addraindrop(){
    this.raindrops.push(new raindrop(this.origin));
}

applyGravity(g){
    // for(let p of this.raindrops) {
    //     p.applyForce(g);
    // }
    this.applyForce(g);
}

applyForce(force){
  for(let p of this.raindrops) {
    p.applyForce(g);
  }
}

run(){    for (let i = this.raindrops.length-1; i >= 0; i--) {
    let p = this.raindrops[i];
    p.run();
    if (p.isDead()) {
      this.raindrops.splice(i, 1);
    }
  }

}

}
