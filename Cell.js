function Cell(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;

    this.draw = function() {
        noStroke();
        fill(255, 0, 0);
        rect(this.x * this.w + 1, this.y * this.w + 1, this.w - 1, this.w - 1);
    }
}
