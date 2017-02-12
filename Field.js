function Field(rows, cols, w, cells) {
  this.rows = rows;
  this.cols = cols;

  if (cells) {
    this.cells = cells;
  } else {
    this.cells = [];
    for (var x = 0; x < this.cols; x++) {
      this.cells[x] = [];
      for (var y = 0; y < this.rows; y++) {
        this.cells[x][y] = new Cell(x, y, w);
      }
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

  this.setNeighborsAlternativ = function() {
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        this.cells[x][y].neighborCount = 0;
        this.cells[x][y].neighborTypeOne = 0;
        this.cells[x][y].neighborTypeTwo = 0;
      }
    }

    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        if (this.cells[x][y].type) {

          // x-1
          if (x > 0) {
            this.cells[x - 1][y].neighborCount++;
            if (this.cells[x][y].type == 1) {
              this.cells[x - 1][y].neighborTypeOne++;
            } else {
              this.cells[x - 1][y].neighborTypeTwo++;
            }
          }

          // x+1
          if (x < this.cols - 1) {
            this.cells[x + 1][y].neighborCount++;
            if (this.cells[x][y].type == 1) {
              this.cells[x + 1][y].neighborTypeOne++;
            } else {
              this.cells[x + 1][y].neighborTypeTwo++;
            }
          }

          // y-1
          if (y > 0) {
            this.cells[x][y - 1].neighborCount++;
            if (this.cells[x][y].type == 1) {
              this.cells[x][y - 1].neighborTypeOne++;
            } else {
              this.cells[x][y - 1].neighborTypeTwo++;
            }
          }

          // y+1
          if (y < this.rows - 1) {
            this.cells[x][y + 1].neighborCount++;
            if (this.cells[x][y].type == 1) {
              this.cells[x][y + 1].neighborTypeOne++;
            } else {
              this.cells[x][y + 1].neighborTypeTwo++;
            }
          }

          // x-1 y-1
          if (x > 0 && y > 0) {
            this.cells[x - 1][y - 1].neighborCount++;
            if (this.cells[x][y].type == 1) {
              this.cells[x - 1][y - 1].neighborTypeOne++;
            } else {
              this.cells[x - 1][y - 1].neighborTypeTwo++;
            }
          }

          // x+1 y-1
          if (x < this.cols - 1 && y > 0) {
            this.cells[x + 1][y - 1].neighborCount++;
            if (this.cells[x][y].type == 1) {
              this.cells[x + 1][y - 1].neighborTypeOne++;
            } else {
              this.cells[x + 1][y - 1].neighborTypeTwo++;
            }
          }

          // x-1 y+1
          if (x > 0 && y < this.rows - 1) {
            this.cells[x - 1][y + 1].neighborCount++;
            if (this.cells[x][y].type == 1) {
              this.cells[x - 1][y + 1].neighborTypeOne++;
            } else {
              this.cells[x - 1][y + 1].neighborTypeTwo++;
            }
          }

          // x+1 y+1
          if (x < this.cols - 1 && y < this.rows - 1) {
            this.cells[x + 1][y + 1].neighborCount++;
            if (this.cells[x][y].type == 1) {
              this.cells[x + 1][y + 1].neighborTypeOne++;
            } else {
              this.cells[x + 1][y + 1].neighborTypeTwo++;
            }
          }

        }
      }
    }

  }

  this.click = function(player, x, y) {
    if (this.cells[x][y].type) {
      this.cells[x][y].type = 0;
    } else {
      //field.cells[x][y].type = player;
      return 0;
    }
    this.setNeighbors();
    this.step();
    return 1;
  }

  this.getTypeOne = function() {
    var typeone = 0;
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        if (this.cells[x][y].type == 1) {
          typeone++;
        }
      }
    }
    return typeone;
  }

  this.getTypeTwo = function() {
    var typetwo = 0;
    for (var x = 0; x < this.cols; x++) {
      for (var y = 0; y < this.rows; y++) {
        if (this.cells[x][y].type == 2) {
          typetwo++;
        }
      }
    }
    return typetwo;
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

  this.clone = function() {
    var new_cells = [];
    for (var x = 0; x < this.cols; x++) {
      new_cells[x] = [];
      for (var y = 0; y < this.rows; y++) {
        new_cells[x][y] = this.cells[x][y].clone();
      }
    }
    return new Field(this.rows, this.cols, this.w, new_cells);
  }
}
