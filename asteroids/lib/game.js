(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  // Asteroids.Game = window.Asteroids.Game = {};
  // Game.prototype.DIM_X;
  // Game.prototype.DIM_Y;
  var Game = Asteroids.Game = function (canvasEl) {
    this.DIM_X = canvasEl.width;
    this.DIM_Y = canvasEl.height;
    // this.numAsteroids = 3;
    this.asteroidArray = [];
    this.addAsteroids(10);
  };

  Game.prototype.addAsteroids = function (numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {
      this.asteroidArray.push(
        new Asteroids.Asteroid(this.randomPosition(), this));
    }
    return this.asteroidArray;
  };



  Game.prototype.randomPosition = function () {
    return [ Math.random()* this.DIM_X,
             Math.random()* this.DIM_Y];
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0,this.DIM_X,this.DIM_Y);
    this.asteroidArray.forEach( function(asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroidArray.forEach( function(asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function (pos) {
    pos[0] = (pos[0] + this.DIM_X) % this.DIM_X;
    pos[1] = (pos[1] + this.DIM_Y) % this.DIM_Y;
    return pos;
  };

})();
