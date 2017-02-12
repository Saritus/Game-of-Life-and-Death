function AI_basic(player) {

  this.player = player;

  this.getMove = function(field) {
    var start = new Date().getTime();
    var move = [];
    var best_ratio;
    var new_field;

    for (var x = 0; x < field.cols; x++) {
      for (var y = 0; y < field.rows; y++) {
        new_field = field.clone();

        if (!new_field.click(this.player, x, y)) {
          continue;
        }
        new_field.step();

        var new_ratio = new_field.getRatio();

        if ((!best_ratio) ||
          (this.player == 1 && new_ratio > best_ratio) ||
          (this.player == 2 && new_ratio < best_ratio)) {
          best_ratio = new_ratio;
          move['x'] = x;
          move['y'] = y;
        }
      }
    }
    //console.log("best_ratio", best_ratio);
    var end = new Date().getTime();
    console.log("Time: ", end - start);
    return move;
  }
}
