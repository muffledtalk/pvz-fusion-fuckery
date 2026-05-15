// js/zombie.js
class Zombie {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health = 150;
        this.speed = 1;
    }
    
    update() {
        this.x -= this.speed;
        if (this.x < 100) {
            console.log('Zombie ate your brain, nga!');
        }
    }
}