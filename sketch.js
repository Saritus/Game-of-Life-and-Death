var cols;
var rows;
var field;

function setup() {
    createCanvas(600, 600);
    var w = 30;
    cols = floor(width / w);
    rows = floor(height / w);

    field = new Field(rows, cols, w);
}

function draw() {
    background(0);
    field.draw();
}
