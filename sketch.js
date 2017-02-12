var cells = [];
var cols;
var rows;

function setup() {
    createCanvas(600, 600);
    var w = 20;
    cols = floor(width / w);
    rows = floor(height / w);

    for (var x = 0; x < cols; x++) {
        for (var y = 0; y < rows; y++) {
            cells.push(new Cell(x, y, w));
        }
    }
}

function draw() {
    background(0);
    for (var i = 0; i < cols * rows; i++) {
        cells[i].draw();
    }

}
