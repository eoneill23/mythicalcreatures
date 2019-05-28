class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.counter = 0;
    this.booty = 0;
  }
  
  commitHeinousAct() {
    this.counter ++
    if (this.counter >= 3) {
      this.cursed = true;
    }
  }

  robShip() {
    this.booty = 100;
    return 'YAARRR!'
  }
}


module.exports = Pirate
//npm test mythical-creatures/test/pirate-test.js








































// class Pirate {
//   constructor(name, job) {
//     this.name = name;
//     this.job = job || 'Scallywag';
//     this.cursed = false;
//     this.heinousActs = 0;
//     this.booty = 0;
//   }
//     commitHeinousAct() {
//       this.heinousActs ++;
//       if (this.heinousActs >= 3) {
//         this.cursed = true;
//       }
//     }

//     robShip() {
//       this.booty = 100;
//       return 'YAARRR!'
//     }
// }