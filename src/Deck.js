const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');


class Deck {
  constructor(cardStack) {
    this.cards = cardStack;
  }
  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
