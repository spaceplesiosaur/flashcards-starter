const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
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

    if (turn.evaluateGuess() === true) {


    }
    this.deck.shift(this.deck[0]);


  }
  calculatePercentCorrect() {

  }
  endRound() {

  }
}


module.exports = Round;
