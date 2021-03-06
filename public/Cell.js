function Cell(x, y, w, type, count, one, two) {
  this.x = x;
  this.y = y;
  this.w = w;
  if (type != undefined) {
    this.type = type;
  } else {
    switch (Math.floor(Math.random() * 5)) {
      case 0:
        this.type = 1;
        break;
      case 1:
        this.type = 2;
        break;
      default:
        this.type = 0;
    }
  }

  this.neighborCount = count || 0;
  this.neighborTypeOne = one || 0;
  this.neighborTypeTwo = two || 0;

  this.draw = function() {
    stroke(0);
    this.setTypeColor(this.type);
    rect(this.x * this.w, this.y * this.w, this.w, this.w);
    noStroke();
    this.setTypeColor(this.getNextStep());
    rect(this.x * this.w + this.w / 8 * 3, this.y * this.w + this.w / 8 * 3, this.w / 4, this.w / 4);
  }

  this.step = function() {
    this.type = this.getNextStep();
  }

  this.getNextStep = function() {
    if (this.type) {
      if (this.neighborCount < 2) {
        return 0;
      } else if (this.neighborCount > 3) {
        return 0;
      } else {
        return this.type;
      }
    } else {
      if (this.neighborCount == 3) {
        if (this.neighborTypeOne > this.neighborTypeTwo) {
          return 1;
        } else {
          return 2;
        }
      } else {
        return 0;
      }
    }
  }

  this.setTypeColor = function(type) {
    switch (type) {
      case 0:
        fill(255);
        break;
      case 1:
        fill(255, 0, 0);
        break;
      case 2:
        fill(0, 0, 255);
        break;
      default:
        fill(0, 255, 0);
    }
  }

  this.clone = function() {
    var newCell = new Cell(this.x, this.y, this.w, this.type, this.neighborCount, this.neighborTypeOne, this.neighborTypeTwo);
    return newCell;
  }
}
