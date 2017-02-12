var cols;
var rows;
var field;
var w = 30;
var player = 1;

function setup() {
  createCanvas(601, 601);
  cols = floor(width / w);
  rows = floor(height / w);
  frameRate(20);

  field = new Field(rows, cols, w);
  field.setNeighbors();
}

function draw() {
  background(0);
  field.draw();
}

function mouseClicked() {
  var x = floor(mouseX / w);
  var y = floor(mouseY / w);
  if (field.cells[x][y].type) {
    field.cells[x][y].type = 0;
  } else {
    field.cells[x][y].type = player;
  }

  field.setNeighbors();
  field.step();
  field.setNeighbors();

  if (player == 1) {
    player = 2;
  } else {
    player = 1;
  }
}
