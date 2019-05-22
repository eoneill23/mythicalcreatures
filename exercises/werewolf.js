class Werewolf {
  constructor(name, place) {
    this.name = name;
    this.location = place;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }

  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
  }

  eat(victim) {
    if (this.hungry) {
    this.human = true;
    this.wolf = false;
    this.hungry = false;
    victim.alive = false;
    } else {
      return 'I can\'t eat a person';
    }
  }
}



module.exports = Werewolf

//npm test mythical-creatures/test/werewolf-test.js