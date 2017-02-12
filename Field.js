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
        this.cells[x][y].step();
      }
    }
  }

  this.setNeighbors = function() {
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        var count = 0;
        var typeone = 0;
        var typetwo = 0;
        // Oben
        if (x > 0 && cells[x - 1][y].type) {
          count++;
          if (cells[x - 1][y].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Unten
        if (x < this.rows - 1 && cells[x + 1][y].type) {
          count++;
          if (cells[x + 1][y].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Links
        if (y > 0 && cells[x][y - 1].type) {
          count++;
          if (cells[x][y - 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Rechts
        if (y < this.cols - 1 && cells[x][y + 1].type) {
          count++;
          if (cells[x][y + 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Oben links
        if (x > 0 && y > 0 && cells[x - 1][y - 1].type) {
          count++;
          if (cells[x - 1][y - 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Oben rechts
        if (x > 0 && y < this.cols - 1 && cells[x - 1][y + 1].type) {
          count++;
          if (cells[x - 1][y + 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Unten links
        if (x < this.rows - 1 && y > 0 && cells[x + 1][y - 1].type) {
          count++;
          if (cells[x + 1][y - 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Unten rechts
        if (x < this.rows - 1 && y < this.cols - 1 && cells[x + 1][y + 1].type) {
          count++;
          if (cells[x + 1][y + 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        cells[x][y].neighborCount = count;
        cells[x][y].neighborTypeOne = typeone;
        cells[x][y].neighborTypeTwo = typetwo;
      }
    }
  }
}
