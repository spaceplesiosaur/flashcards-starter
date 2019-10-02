const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should start with 0 rounds', function() {
  
    const game = new Game();

    expect(game.currentRound).to.equal(0);
  });

  it('should used provided data to make array of cards', function(){
    const game = new Game();

    expect(game.start().deck.length).to.equal(30);
  })
  //make sure cardStack[0] is right
  //make sure another card is right
  //make sure a deck is instantiated
  //make sure a round is instantiated

});
