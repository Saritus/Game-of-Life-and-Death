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
    // Oben
    if (x > 0 && cells[x - 1][y]) {
      count++;
    }
    // Unten
    if (x < this.rows - 1 && cells[x + 1][y]) {
      count++;
    }
    // Links
    if (y > 0 && cells[x][y - 1]) {
      count++;
    }
    // Rechts
    if (y < this.cols - 1 && cells[x][y + 1]) {
      count++;
    }
    // Oben links
    if (x > 0 && y > 0 && cells[x - 1][y - 1]) {
      count++;
    }
    // Oben rechts
    if (x > 0 && y < this.cols - 1 && cells[x - 1][y + 1]) {
      count++;
    }
    // Unten links
    if (x < this.rows - 1 && y > 0 && cells[x + 1][y - 1]) {
      count++;
    }
    // Unten rechts
    if (x < this.rows - 1 && y < this.cols - 1 && cells[x + 1][y + 1]) {
      count++;
    }
    return count;
  }
}
