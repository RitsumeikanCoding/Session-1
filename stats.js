// This code manages the health and hunger stats of a cat in a game.
console.log("Stats module loaded");
const stats = {
  health: 100,
  hunger: 100
};
//function to decay hunger one point every second
function decayHunger() {
  if (stats.hunger > 0) {
    stats.hunger -= 1;
  }
  if (stats.hunger < 0) {
    stats.hunger = 0;
  }
}
//function to decay health after hunger reaches 0
function decayHealth() {
  if (stats.hunger <= 0) {
    stats.health -= 1;
    if (stats.health < 0) {
      stats.health = 0;
    }
  }
}
//An alert showing the game over when the health reaches 0
function checkGameOver() {
  if (stats.health <= 0) {
    alert("Game Over");
  }
}

//function that adds the stats to the HTML. the hearts will be made with a heart emoji
// and the hunger will be shown as a number
function updateStats() {
  const statsDiv = document.getElementById("stats");
  if (statsDiv) {
    statsDiv.innerHTML = `Health: ${stats.health} | Hunger: ${stats.hunger}`;
  }
}

//Add a heart emoji to the stats div
const healthDiv = document.getElementById("health");
const heartEmoji = "❤️";
if (healthDiv) {
  healthDiv.innerHTML = `Health: ${heartEmoji.repeat(stats.health / 10)}`;
}
//Add a poultry leg emoji to represent hunger
const hungerDiv = document.getElementById("hunger");
const poultryEmoji = "🍗";
if (hungerDiv) {
  hungerDiv.innerHTML = `Hunger: ${poultryEmoji.repeat(stats.hunger / 10)}`;
}

//Change the number of hearts based on the health and hunger stats
setInterval(() => {
  decayHunger();
  decayHealth();
  checkGameOver();
  updateStats();
}, 1000); // Update every second