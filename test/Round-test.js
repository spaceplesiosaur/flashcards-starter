const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let cardList;
  let deck;
  let testDate;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    cardList = [card1, card2, card3];

    deck = new Deck(cardList);

    testDate = Date.now();

    round = new Round(deck, testDate);
 });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take a deck', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should take a start time in seconds', function() {
    expect(round.startTime).to.equal(testDate);
  });

  it('should start with 0 turns', function() {
    expect(round.turns).to.equal(0);
  });

  it('should be able to store incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should have the first card in the deck as current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(cardList[0]);
  });

  it('should increase the number of turns each time a turn is taken', function() {
    round.takeTurn('moose')
    round.takeTurn('moose')
    round.takeTurn('moose')

    expect(round.turns).to.equal(3);
  });

  it('should remove first card each time a turn is taken', function() {
    round.takeTurn('moose')
    round.takeTurn('moose')

    expect(round.returnCurrentCard()).to.deep.equal(card3);
  });

  it('should say if a guess is wrong', function() {
    expect(round.takeTurn('basket of eggs')).to.equal("Incorrect!");
  });

  it('should say if a guess is right', function() {
    expect(round.takeTurn('sandwiches')).to.equal("Correct!");
  });

  it('should store incorrect guesses', function() {
    round.takeTurn('basket of eggs');
    round.takeTurn('rabbits');
    round.takeTurn('cats');

    expect(round.incorrectGuesses.length).to.equal(2);
  });

  it('should keep incorrect guesses in deck and remove correct guesses', function() {
    round.takeTurn('basket of eggs');
    round.takeTurn('rabbits');
    round.takeTurn('cats');

    expect(round.deck.length).to.equal(2);
  });

  it('should know what percent of guesses were correct when deck is empty', function() {
    round.takeTurn('basket of eggs');
    round.takeTurn('rabbits');
    round.takeTurn('cats');
    round.takeTurn('sandwiches');
    round.takeTurn('carrot');

    expect(round.calculatePercentCorrect()).to.equal(60);
  });

  it('should say that the game is over, what percent of answers were correct, and how long it took', function() {
    round.takeTurn('basket of eggs');
    round.takeTurn('rabbits');
    round.takeTurn('cats');
    round.takeTurn('sandwiches');
    round.takeTurn('carrot');

    setTimeout(function() {
        expect(round.endRound()).to.equal(`Round over! ** You answered 60% of the questions correctly! It took you ${Math.floor((Date.now() - round.startTime)/1000/60)} minutes and ${Math.floor((Date.now() - round.startTime)/1000 % 60)} seconds.`);
      }, 2000)
  });
});
