function AI(player) {

  this.player = player;

  this.getMove = function(field) {
    var startratio = field.getRatio();
    var start = new Date().getTime();
    var move = [];
    var best_ratio;
    var worst_ratio;
    var new_field;

    for (var x = 0; x < field.cols; x++) {
      for (var y = 0; y < field.rows; y++) {
        new_field = field.clone();

        if (!new_field.click(this.player, x, y)) {
          continue;
        }
        new_field.step();
        var new_ratio = new_field.getRatio();

        for (var x1 = 0; x1 < field.cols; x1++) {
          for (var y1 = 0; y1 < field.rows; y1++) {

            var other_field = new_field.clone();
            var other_player;
            if (this.player == 1) {
              other_player = 2;
            } else {
              other_player = 1;
            }

            if (!other_field.click(other_player, x1, y1)) {
              continue;
            }
            other_field.setNeighbors();
            other_field.step();
            var other_ratio = other_field.getRatio();

            if ((!best_ratio) ||
              (other_player == 1 && other_ratio > best_ratio) ||
              (other_player == 2 && other_ratio < best_ratio)) {
              best_ratio = other_ratio;
              //move['x'] = x;
              //move['y'] = y;
            }
          }
        }

        if ((!worst_ratio) ||
          (this.player == 1 && best_ratio > worst_ratio) ||
          (this.player == 2 && best_ratio < worst_ratio)) {
          worst_ratio = best_ratio;
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
