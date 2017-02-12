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
