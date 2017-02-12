var cols;
var rows;
var field;
var w = 60;
var player = 1;
var player_output;

function setup() {
  createCanvas(601, 601);
  cols = floor(width / w);
  rows = floor(height / w);

  player_output = createP();
  player_output.html("Spieler " + player + " ist am Zug");

  field = new Field(rows, cols, w);
  field.setNeighbors();
  noLoop();
}

function draw() {
  background(0);
  field.draw();
}

function mouseClicked() {
  var x = floor(mouseX / w);
  var y = floor(mouseY / w);

  if (!field.cells[x][y]) {
    return;
  }

  if (!field.click(player, x, y)) {
    return;
  }

  field.setNeighbors();
  field.step();
  field.setNeighbors();

  if (player == 1) {
    player = 2;
  } else {
    player = 1;
  }
  player_output.html("Spieler " + player + " ist am Zug");
  redraw();
}

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
