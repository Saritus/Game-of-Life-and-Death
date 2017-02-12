var cols;
var rows;
var field;
var w = 30;

function setup() {
  createCanvas(600, 600);
  cols = floor(width / w);
  rows = floor(height / w);
  frameRate(5);

  field = new Field(rows, cols, w);
}

function draw() {
  background(0);
  field.draw();
}
