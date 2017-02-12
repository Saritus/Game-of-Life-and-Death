function Cell(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.type = floor(random(0, 3));

    this.draw = function() {
        noStroke();

        switch (this.type) {
            case 0:
                fill(0, 0, 0);
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

        rect(this.x * this.w + 1, this.y * this.w + 1, this.w - 1, this.w - 1);
    }
}
