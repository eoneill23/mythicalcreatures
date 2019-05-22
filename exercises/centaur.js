class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.count = 0;
    this.layingDown = false;
  }

  counter() {
    this.count ++;
    if (this.count  > 2 ) {
      this.cranky = true;
    } else {
      this.cranky = false;
    }
  }

  shoot() {
    this.counter();
    if (!this.cranky && !this.layingDown) {
      return 'Twang!!!';
    } else {
      return 'NO!';
    }
  }

  run() {
    this.counter();
    if (this.count < 3 && !this.layingDown) {
    return 'Clop clop clop clop!!!';
    } else {
      return 'NO!';
    }
  }

  sleep() {
    if (this.layingDown) {
      this.cranky = false;
      this.count = 0;
      return 'ZZZZ'
    } else {
      return 'NO!';
    }
  }

  layDown() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }

  standUp() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }

  drinkPotion() {
    this.cranky = !this.cranky;
    return 'Not while I\'m laying down!';
  }
}


module.exports = Centaur
//npm test mythical-creatures/test/centaur-test.js