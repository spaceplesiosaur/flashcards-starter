const data = require('./data');
const Turn = require('../src/Turn');

class Round {
  constructor(deckDetails, startTime, endTime) {
    this.deck = deckDetails.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = startTime;
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
      var message = (`Round over! ** You answered ${Math.floor(this.calculatePercentCorrect())}% of the questions correctly! It took you ${Math.floor((Date.now() - this.startTime)/1000/60)} minutes and ${Math.floor((Date.now() - this.startTime)/1000 % 60)} seconds.`);
      console.log(message);
      return message;


  }
}

module.exports = Round;
