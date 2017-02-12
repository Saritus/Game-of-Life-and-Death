var cell = new Cell(0, 0);

function setup() {
    createCanvas(600, 600);
    var w = 10;
    cols = floor(width / w);
    rows = floor(height / w);

}

function draw() {
    background(0);
    cell.draw();
}

function Cell(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = 20;

    this.draw = function() {
        noStroke();
        fill(255, 0, 0);
        rect(this.x, this.y, this.w, this.w);
    }
}
