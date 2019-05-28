class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust+=10;
  }

  makeDresses(flowers) {
    for (var i = 0; i < flowers.length; i++) {
      this.clothes.dresses.push(flowers[i]);
    }
  }

  provoke() {
    this.disposition = 'Vengeful';
  }

  replaceInfant(baby) {
    if (this.disposition === 'Vengeful') {
      baby.disposition = 'Malicious';
    this.humanWards.push(baby);
    if (this.humanWards.length >= 3) {
    this.disposition = 'Good natured';
      }
    } return baby;
  }
}

module.exports = Fairy

//npm test mythical-creatures/test/fairy-test.js