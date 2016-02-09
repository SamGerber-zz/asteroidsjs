(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  // if (typeof Asteroids.Util === "undefined") {
  //   Asteroids.Util = window.Asteroids.Util = {};
  // }

  var Asteroid = Asteroids.Asteroid = function(pos, game) {
    var velX = Math.floor(Math.random() * (3) + 1);
    if (Math.random() > 0.5) {
      velX *= -1;
    }
    var velY = Math.floor(Math.random() * (3) + 1);
    if (Math.random() > 0.5) {
      velY *= -1;
    }
    Asteroids.MovingObject.call(this, pos, [velX, velY], 20, "blue", game);
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);
})();
