class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  stare (unfortunatePerson) {
    this.statues.push(unfortunatePerson);
    unfortunatePerson.stoned = true;
    if(this.statues.length > 3) {
      this.statues[0].stoned = false;
      this.statues.shift();
    }
  }
}


module.exports = Medusa