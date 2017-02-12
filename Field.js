function Field(rows, cols, w) {
    this.rows = rows;
    this.cols = cols;
    this.cells = [];

    this.draw = function() {
        for (var i = 0; i < this.cells.length; i++) {
            this.cells[i].draw();
        }
    }

    for (var x = 0; x < this.cols; x++) {
        for (var y = 0; y < this.rows; y++) {
            this.cells.push(new Cell(x, y, w));
        }
    }
}
