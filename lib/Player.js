const Potion = require("../lib/Potion");

// function Player(name = "") {
//   this.name = name;

//   this.health = Math.floor(Math.random() * 10 + 95);
//   this.strength = Math.floor(Math.random() * 5 + 7);
//   this.agility = Math.floor(Math.random() * 5 + 7);
//   this.inventory = [new Potion("health"), new Potion()];
// }

// function Player(name = "") {
//   this.name = name;

//   this.health = Math.floor(Math.random() * 10 + 95);
//   this.strength = Math.floor(Math.random() * 5 + 7);
//   this.agility = Math.floor(Math.random() * 5 + 7);

//   this.inventory = [new Potion("health"), new Potion()];

//   // returns an object with various player properties
//   this.getStats = function () {
//     return {
//       potions: this.inventory.length,
//       health: this.health,
//       strength: this.strength,
//       agility: this.agility,
//     };
//   };

//   // returns the inventory array or false if empty
//   this.getInventory = function () {
//     if (this.inventory.length) {
//       return this.inventory;
//     }
//     return false;
//   };
// }

// There's some room to refactor, though. Remember, using this was only one option available to us, so let's think about other ways to do this.

// Remove both of the methods from the Player() function and rewrite them below that function using the following prototype syntax:

// refractor code

function Player(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion("health"), new Potion()];
}

Player.prototype.getStats = function () {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility,
  };
};

Player.prototype.getInventory = function () {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

module.exports = Player;
