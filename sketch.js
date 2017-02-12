var cols;
var rows;
var field;
var w = 30;
var player = 1;
var player_output;
var ai_move;
var isPlayerOneAi = false;
var checkOneAi;
var isPlayerTwoAi = false;
var checkTwoAi;

function setup() {
  createCanvas(601, 601);
  cols = floor(width / w);
  rows = floor(height / w);

  player_output = createP();
  player_output.html("Next turn: Player " + player);

  checkOneAi = createCheckbox('Player 1 is AI', false);
  checkOneAi.changed(function() {
    isPlayerOneAi = !isPlayerOneAi
  });

  checkTwoAi = createCheckbox('Player 2 is AI', false);
  checkTwoAi.changed(function() {
    isPlayerTwoAi = !isPlayerTwoAi
  });

  field = new Field(rows, cols, w);
  field.setNeighbors();

  //frameRate(3);
}

function draw() {
  background(0);

  if ((player == 1 && isPlayerOneAi) || (player == 2 && isPlayerTwoAi)) {
    execute_ai(player);
  }

  field.setNeighbors();
  field.draw();
  player_output.html("Next turn: Player " + player);

  if ((field.getTypeOne() == 0) || (field.getTypeTwo() == 0)) {
    noLoop();
  }
}

function execute_ai(p) {
  // AI
  var ai = new AI(p);
  var move = ai.getMove(field);
  console.log("Move: ", move['x'], move['y']);
  field.click(p, move['x'], move['y']);
  console.log("Ratio: ", field.getRatio());
  console.log("One, Two: ", field.getTypeOne(), field.getTypeTwo());
  console.log("- - - - - - - - - -");
  if (player == 1) {
    player = 2;
  } else {
    player = 1;
  }
}

function mouseClicked() {

  // Spieler
  if (!player) {
    return; // Wrong player
  }

  var x = floor(mouseX / w);
  var y = floor(mouseY / w);

  if ((!field.cells[x]) || (!field.cells[x][y])) {
    return; // Click out of window
  }

  if (!field.click(player, x, y)) {
    return; // Clicked on empty cell
  }

  if (player == 1) {
    player = 2;
  } else {
    player = 1;
  }
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
