const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = 0;
  }
  start() {
    this.currentRound++;
    var cardsFromData = [];

    function makeCards(cardData) {
      var card = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer);
      cardsFromData.push(card);
    }
    prototypeQuestions.forEach(makeCards);
    const deck = new Deck(cardsFromData);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
    return round;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
