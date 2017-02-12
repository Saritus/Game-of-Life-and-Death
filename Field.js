function Field(rows, cols, w) {
  this.rows = rows;
  this.cols = cols;
  this.cells = [];

  for (var x = 0; x < this.cols; x++) {
    this.cells[x] = [];
    for (var y = 0; y < this.rows; y++) {
      this.cells[x][y] = new Cell(x, y, w);
    }
  }

  this.draw = function() {
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        this.cells[x][y].draw();
      }
    }
  }

  this.step = function() {
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        this.cells[x][y].draw();
      }
    }
  }

  this.getNeighbors = function(x, y) {
    var count = 0;
    if (x > 0 && cells[x - 1][y])
      count++;
    return count;
  }

}
