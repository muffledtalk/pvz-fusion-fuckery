// js/plant.js
class Plant {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.health = 100;
        this.damage = 25;
        this.cooldown = 0;
        this.tags = [];
    }
    
    shoot() {
        console.log(this.type + ' just shot a load at a zombie');
    }
    
    fuseWith(otherPlant) {
        return new FusedPlant(this, otherPlant);
    }
}

class FusedPlant extends Plant {
    constructor(p1, p2) {
        super(p1.x, p1.y, p1.type + '-' + p2.type);
        this.health = (p1.health + p2.health) * 1.69;
        this.damage = (p1.damage + p2.damage) * 2.0;
        console.log('🔥 FUSED A MONSTER: ' + this.type);
    }
}