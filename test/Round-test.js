const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  it('should be a function', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(round).to.be.an.instanceof(Round);
  });

  it('should take a deck', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should start with 0 turns', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should be able to store incorrect guesses', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should have the first card in the deck as current card', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(cardList[0]);
  });

  it('should instantiate a new turn when turn is taken', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(round.takeTurn('moose')).to.be.an.instanceof(Turn);
  });

  it('should increase the number of turns each time a turn is taken', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    round.takeTurn('moose')
    round.takeTurn('moose')
    round.takeTurn('moose')

    expect(round.turns).to.equal(3);
  });

  it('should remove first card each time a turn is taken', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    round.takeTurn('moose')
    round.takeTurn('moose')

    expect(round.returnCurrentCard()).to.deep.equal(card3);
  });

  it('should know if a guess is wrong', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(round.takeTurn('basket of eggs').evaluateGuess()).to.equal(false);

  });

  it('should know if a guess is right', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(round.takeTurn('sandwiches').evaluateGuess()).to.equal(true);
  });

  it('should say if a guess is wrong', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(round.takeTurn('basket of eggs').giveFeedback()).to.equal("Incorrect!");
  });

  it('should say if a guess is wrong', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    expect(round.takeTurn('sandwiches').giveFeedback()).to.equal("Correct!");
  });

  it('should store incorrect guesses', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    round.takeTurn('basket of eggs');
    round.takeTurn('rabbits');
    round.takeTurn('cats');

    console.log(round.incorrectGuesses);

    expect(round.incorrectGuesses.length).to.equal(2);
  });

  it('should keep incorrect guesses in deck and remove correct guesses', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    round.takeTurn('basket of eggs');
    round.takeTurn('rabbits');
    round.takeTurn('cats');

    expect(round.deck.length).to.equal(2);
  });

  it ('should what percent of guesses were correct when deck is empty', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    round.takeTurn('basket of eggs');
    round.takeTurn('rabbits');
    round.takeTurn('cats');
    round.takeTurn('sandwiches');
    round.takeTurn('carrot');

    expect(round.calculatePercentCorrect()).to.equal(60);
  });

  it ('should say that the game is over and what percent of answers were correct', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);

    const round = new Round(deck);

    round.takeTurn('basket of eggs');
    round.takeTurn('rabbits');
    round.takeTurn('cats');
    round.takeTurn('sandwiches');
    round.takeTurn('carrot');

    expect(round.endRound()).to.equal('Round over! ** You answered 60% of the questions correctly!');
  });
});
