const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Turn {
  constructor(guessString, cardDetails) {
    this.guess = guessString;
    this.card = cardDetails;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }
  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return "Correct!"
    } else {
      return "Incorrect!"
    }
  }
}

module.exports = Turn;
