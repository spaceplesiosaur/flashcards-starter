class Deck {
  constructor(cardStack) {
    this.cards = cardStack;
  }
  countCards() {
    return this.cards.length;
  }
}


module.exports = Deck;
