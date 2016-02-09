(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (ctx, game) {
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.start = function () {
    setInterval(function () {
      this.game.moveObjects();
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };
})();
