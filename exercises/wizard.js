class Wizard {
  constructor(object) {
  this.name = object.name;
  this.isRested = true;
  this.spells = 0;
  if (object.bearded === false){
    this.bearded = object.bearded;
    } else {
      this.bearded = true;
    }
  }

  incantation(caps) {
    return caps.toUpperCase();
  }

  cast() {
    this.spells ++
    if (this.spells >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST';
    }
    return 'MAGIC BULLET';
  }
}


module.exports = Wizard

// npm test mythical-creatures/test/wizard-test.js