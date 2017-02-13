var cols;
var rows;
var field;
var w = 60;
var player = 1;
var player_output;
var ai_move;
var isPlayerOneAi = false;
var checkOneAi;
var isPlayerTwoAi = false;
var checkTwoAi;
var endbutton;
var undobutton;
var restartbutton;
var checkAutorestart;
var moveX;
var moveY;
var move = false;
var oldplayer;

function setup() {
  createCanvas(601, 601);
  cols = floor(width / w);
  rows = floor(height / w);

  player_output = createP();
  player_output.html("Next turn: Player " + player);

  endbutton = createButton('Finish move');
  endbutton.mousePressed(finishmove);

  undobutton = createButton('Undo move');
  undobutton.mousePressed(undomove);

  checkOneAi = createCheckbox('Player 1 is AI', false);
  checkOneAi.changed(function() {
    isPlayerOneAi = !isPlayerOneAi
  });

  checkTwoAi = createCheckbox('Player 2 is AI', false);
  checkTwoAi.changed(function() {
    isPlayerTwoAi = !isPlayerTwoAi
  });

  restartbutton = createButton('Restart');
  restartbutton.mousePressed(restart);

  checkAutorestart = createCheckbox('Autorestart', false);

  field = new Field(rows, cols, w);
  field.setNeighbors();

  frameRate(10);
}

function draw() {
  background(0);

  if ((!move) && ((player == 1 && isPlayerOneAi) || (player == 2 && isPlayerTwoAi))) {
    execute_ai(player);
  }

  field.setNeighbors();
  field.draw();
  player_output.html("<font color=\"" + playercolor() + "\">Next turn: Player " + player + "</font>");

  if ((field.getTypeOne() == 0) || (field.getTypeTwo() == 0)) {
    noLoop();
    console.log(field.getTypeOne(), field.getTypeTwo());
    if (checkAutorestart.checked()) {
      restart();
    }
  }
}

function execute_ai(p) {
  // AI
  var ai;
  if (p == 1) {
    ai = new AI(p);
  }
  if (p == 2) {
    ai = new AI_basic(p);
  }
  ai_move = ai.getMove(field);
  //console.log("Move: ", ai_move['x'], ai_move['y']);
  field.click(p, ai_move['x'], ai_move['y']);
  move = true;
  finishmove();
  //console.log("Player: ", player);
  //console.log("Ratio: ", field.getRatio());
  //console.log("One, Two: ", field.getTypeOne(), field.getTypeTwo());
  //console.log("- - - - - - - - - -");
}

function mouseClicked() {

  // Spieler
  if (!player) {
    return; // Wrong player
  }

  var x = floor(mouseX / w);
  var y = floor(mouseY / w);
  if (!move) {
    if ((!field.cells[x]) || (!field.cells[x][y])) {
      return; // Click out of window
    }

    moveX = x;
    moveY = y;
    move = true;

    if (!field.click(player, x, y)) {
      return; // Clicked on empty cell
    }
  } else if (x == moveX && y == moveY) {
    undomove();
  }
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function finishmove() {
  if (move) {
    field.step();

    if (player == 1) {
      player = 2;
    } else {
      player = 1;
    }
    move = false;

    sendmove(moveX, moveY);
  }
}

function undomove() {
  if (move) {
    field.click(oldplayer, moveX, moveY);
    move = false;
  }
}

function restart() {
  field = new Field(rows, cols, w);
  field.setNeighbors();
  loop();
}

function playercolor() {
  if (player == 1) {
    return "red";
  } else {
    return "blue";
  }
}

function receiveMove(x, y) {
  field.click(player, x, y);
  field.step();

  if (player == 1) {
    player = 2;
  } else {
    player = 1;
  }
}
