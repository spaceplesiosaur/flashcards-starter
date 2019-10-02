const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should start with 0 rounds', function() {
    // const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    // const card2 = new Card(2, 'What is your greatest fear?', ['rabbits', 'forced to marry a rabbit', 'The Easter Bunny'], 'rabbits');
    // const card3 = new Card(3, 'What is your most treasured object?', ['carrot', 'The Tale of Peter Rabbit', 'basket of eggs'], 'carrot');
    //
    // const cardList = [card1, card2, card3];
    //
    // const deck = new Deck(cardList);
    //
    // const round = new Round(deck);

    const game = new Game();

    expect(game.currentRound).to.equal(0);
  });

  it('should used provided data to make array of cards', function(){
    const game = new Game();

    expect(game.start().deck.length).to.equal(30);
  })
  //make sure cardStack[0] is right
  //make sure another card is right
  //make sure card array has 25 cardss
  //make sure a deck is instantiated
  //make sure a round is instantiated

});
