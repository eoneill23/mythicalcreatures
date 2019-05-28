class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location) {
    stark.safe = !stark.safe;
    this.starksToProtect.push(stark);
    this.huntsWhiteWalkers = !this.huntsWhiteWalkers;
    }

    if (this.starksToProtect.length > 2) {
      this.starksToProtect.pop()
    }
  }

  leave(stark) {
    this.starksToProtect.pop();
    stark.safe = false
  }
}

module.exports = Direwolf
// npm test mythical-creatures/test/direwolf-test.js