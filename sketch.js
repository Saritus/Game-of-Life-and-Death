var cell = new Cell(0, 0);

function setup() {
    createCanvas(600, 600);
    var w = 20;
    cols = floor(width / w);
    rows = floor(height / w);

}

function draw() {
    background(0);
    cell.draw();
}
