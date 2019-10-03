const data = require('./data');
const Turn = require('../src/Turn');

class Round {
  constructor(deckDetails) {
    this.deck = deckDetails.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }
  returnCurrentCard() {
    return this.deck[0];
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    var guessEval = turn.evaluateGuess();
    if (guessEval === false) {
      this.incorrectGuesses.push(this.deck[0].id);
      this.deck.push(this.deck.shift());
    } else {
      this.deck.shift();
    }
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return 100 - (this.incorrectGuesses.length / this.turns * 100)
  }
  endRound() {
    if (this.deck.length === 0) {
      var message = (`Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
      console.log(message);
      return message;
    }
  }
}

module.exports = Round;
