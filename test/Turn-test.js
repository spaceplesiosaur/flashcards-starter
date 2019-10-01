const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should take a guess', function() {
    const turn = new Turn('dogs');
    expect(turn.guess).to.equal('dogs');
  });

  it('should take another guess', function() {
    const turn = new Turn('cats');
    expect(turn.guess).to.equal('cats');
  });

  it('should take a card', function() {
    const card = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const turn = new Turn('cats', card);
    expect(turn.card.id).to.equal(1);
  });

  // it.skip('should have a question', function() {
  //   const card = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
  //   const turn = new Turn('cats', card);
  //   expect(turn.card.question).to.equal('What is your dearest ambition?');
  // });
  //
  // it.skip('should have a list of possible answers', function() {
  //   const card = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
  //   const turn = new Turn('cats', card);
  //   expect(turn.card.answers).to.equal(['to eat candy', 'to marry a rabbit', 'sandwiches']);
  // });
  //
  // it.skip('should have one correct answer', function() {
  //   const card = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
  //   const turn = new Turn('cats', card);
  //   expect(turn.card.correctAnswer).to.equal('sandwiches');
  // });

  it('should return the guess', function() {
    const card = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const turn = new Turn('cats', card);
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it('should return the cardInfo', function() {
    const card = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const turn = new Turn('cats', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return correct card info', function() {
    const card1 = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const card2 = new Card(2, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const turn = new Turn('cats', card1);
    expect(turn.returnCard()).to.not.equal(card2);
  });

  it('should correctly show if the guess matches the card answer', function() {
    const card = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const turn = new Turn('sandwiches', card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it('should correctly show if the guess does not match the card answer', function() {
    const card = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const turn = new Turn('to eat candy', card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should say if the answer is incorrect', function() {
    const card = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const turn = new Turn('to eat candy', card);
    expect(turn.giveFeedback()).to.equal("Incorrect!");
  });

  it('should say if the answer is correct', function() {
    const card = new Card(1, 'What is your dearest ambition?', ['to eat candy', 'to marry a rabbit', 'sandwiches'], 'sandwiches');
    const turn = new Turn('sandwiches', card);
    expect(turn.giveFeedback()).to.equal("Correct!");
  });
});
