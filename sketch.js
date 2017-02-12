var cols;
var rows;
var field;
var w = 30;

function setup() {
  createCanvas(601, 601);
  cols = floor(width / w);
  rows = floor(height / w);
  frameRate(1);

  field = new Field(rows, cols, w);
}

function draw() {
  background(0);
  field.setNeighbors();
  field.draw();
}
