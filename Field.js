function Field(rows, cols, w) {
  this.rows = rows;
  this.cols = cols;
  this.cells = [];

  this.draw = function() {
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        this.cells[x][y].draw();
      }
    }
  }

  for (var x = 0; x < this.cols; x++) {
    this.cells[x] = [];
    for (var y = 0; y < this.rows; y++) {
      this.cells[x][y] = new Cell(x, y, w);
    }
  }
}
