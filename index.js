const http = require('http');
let app = http.createServer();
const Game = require('../flashcard-game/src/Game');
const game = new Game();

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
game.start();
console.log('Node server running on port 3000');
