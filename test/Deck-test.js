const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should take a list of cards', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(1, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(1, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cardList = [card1, card2, card3];

    const deck = new Deck(cardList);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should count the number of cards in the list', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(1, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    const card3 = new Card(1, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');

    const cards = [card1, card2, card3];

    const deck = new Deck(cards);
    expect(deck.countCards()).to.equal(3);
  });
});
