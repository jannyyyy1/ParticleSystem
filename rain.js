class Rain {
constructor(position){
    this.origin = position.copy();
    this.raindrops = [];
}

addRaindrop(){
    this.raindrops.push(new Raindrop(this.origin));
}

applyGravity(g){
    // for(let p of this.raindrops) {
    //     p.applyForce(g);
    // }
    this.applyForce(g);
}

applyForce(force){
  for(let r of this.raindrops) {
    r.applyForce(g);
  }
}

run(){    for (let i = this.raindrops.length-1; i >= 0; i--) {
    let r = this.raindrops[i];
    r.run();
    if (r.isDead()) {
      this.raindrops.splice(i, 1);
    }
  }

}

}
