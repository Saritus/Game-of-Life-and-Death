function AI(player) {

  this.player = player;

  this.getMove = function(field) {
    var move = [];
    var best_ratio;
    var new_field;

    for (var x = 0; x < field.cols; x++) {
      for (var y = 0; y < field.rows; y++) {
        new_field = field.clone();

        new_field.cells[0][0].type = 3;

        if (!new_field.click(this.player, x, y)) {
          continue;
        }
        new_field.setNeighbors();
        new_field.step();

        var new_ratio = new_field.getRatio();

        if ((!best_ratio) ||
          (player == 1 && new_ratio > best_ratio) ||
          (player == 2 && new_ratio < best_ratio)) {
          best_ratio = new_ratio;
          move['x'] = x;
          move['y'] = y;
        }
      }
    }

    return move;
  }
}
