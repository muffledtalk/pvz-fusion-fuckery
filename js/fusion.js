// js/fusion.js
// Fusion system - the heart of this degenerate game
function fusePlants(plant1, plant2) {
    const fusion = new FusedPlant(plant1, plant2);
    console.log('%cUNHINGED FUSION ACHIEVED', 'color:red; font-size:20px');
    return fusion;
}

// Example fusions
console.log('Ready to fuse Peashooter + Cherry Bomb = FirePea Nuke');