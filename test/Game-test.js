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

  it('should used provided data to make array of cards', function() {
    const game = new Game();

    expect(game.start().deck.length).to.equal(30);
  });

  it('should have the correct card at the top', function() {
    const game = new Game();

    expect(game.start().deck[0].id).to.equal(1);
  });

  it('should have the correct card at the bottom', function() {
    const game = new Game();

    expect(game.start().deck[29].id).to.equal(30);
  });

  it('should instantiate a new round', function() {
    const game = new Game();

    expect(game.start()).to.be.an.instanceof(Round);
  });

});
