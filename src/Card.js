const data = require('./data');

class Card {
  constructor(idNum, questionString, answersArray, correctAnswerString) {
    this.id = idNum;
    this.question = questionString;
    this.answers = answersArray;
    this.correctAnswer = correctAnswerString;
  }
}

module.exports = Card;
