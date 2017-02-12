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
        if (x > 0 && this.cells[x - 1][y].type) {
          count++;
          if (this.cells[x - 1][y].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Unten
        if (x < this.rows - 1 && this.cells[x + 1][y].type) {
          count++;
          if (this.cells[x + 1][y].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Links
        if (y > 0 && this.cells[x][y - 1].type) {
          count++;
          if (this.cells[x][y - 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Rechts
        if (y < this.cols - 1 && this.cells[x][y + 1].type) {
          count++;
          if (this.cells[x][y + 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Oben links
        if (x > 0 && y > 0 && this.cells[x - 1][y - 1].type) {
          count++;
          if (this.cells[x - 1][y - 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Oben rechts
        if (x > 0 && y < this.cols - 1 && this.cells[x - 1][y + 1].type) {
          count++;
          if (this.cells[x - 1][y + 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Unten links
        if (x < this.rows - 1 && y > 0 && this.cells[x + 1][y - 1].type) {
          count++;
          if (this.cells[x + 1][y - 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        // Unten rechts
        if (x < this.rows - 1 && y < this.cols - 1 && this.cells[x + 1][y + 1].type) {
          count++;
          if (this.cells[x + 1][y + 1].type == 1) {
            typeone++;
          } else {
            typetwo++;
          }
        }
        this.cells[x][y].neighborCount = count;
        this.cells[x][y].neighborTypeOne = typeone;
        this.cells[x][y].neighborTypeTwo = typetwo;
      }
    }
  }

  this.click = function(player, x, y) {
    if (field.cells[x][y].type) {
      field.cells[x][y].type = 0;
      return 1;
    } else {
      //field.cells[x][y].type = player;
      return 0;
    }
  }

  this.getRatio = function() {
    var typeone = 0;
    var typetwo = 0;
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        if (this.cells[x][y].type == 1) {
          typeone++;
        } else if (this.cells[x][y].type == 2) {
          typetwo++;
        }
      }
    }
    return typeone / typetwo;
  }
}
