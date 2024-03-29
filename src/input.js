import Game from "./game";

export default class InputHandler {
  constructor(game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          game.paddle.moveLeft();
          break;
        case 39:
          game.paddle.moveRight();
          break;
        case 27:
          game.togglePause();
          break;
        case 32:
          game.start();
          break;
        default:
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (game.paddle.speed < 0) game.paddle.stop();
          break;
        case 39:
          if (game.paddle.speed > 0) game.paddle.stop();
          break;
        default:
      }
    });
  }
}
