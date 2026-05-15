// js/game.js - Main unhinged game loop
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let sun = 500;
let plants = [];
let zombies = [];
let projectiles = [];

console.log('PvZ Fusion Fuckery JS loaded, nga!');

function gameLoop() {
    ctx.fillStyle = '#0a3';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw lanes
    ctx.strokeStyle = '#0f0';
    for(let i=1; i<5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i*100);
        ctx.lineTo(canvas.width, i*100);
        ctx.stroke();
    }
    
    // Update and draw everything
    updatePlants();
    updateZombies();
    updateProjectiles();
    
    document.getElementById('sun').textContent = sun;
    requestAnimationFrame(gameLoop);
}

gameLoop();

function updatePlants() {
    // TODO: draw plants
}

function updateZombies() {
    // Zombies coming to eat your ass
}

function updateProjectiles() {
    // Pew pew
}