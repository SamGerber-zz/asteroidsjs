Function.prototype.inherits = function(parent) {
  function Surrogate() {
  }
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject () {
  // this.velocity = "100 mph!";
}

MovingObject.prototype.velocity = "100 mph!";

function Ship () {
  // MovingObject.call(this);
}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.spin = function() { console.log("Weee");};
Ship.prototype.spin = function() { console.log("ShipWeee");};
Asteroid.prototype.spin = function() { console.log("AstWeee");};

var mFal = new Ship();
var comet = new Asteroid();
var zoomi = new MovingObject();

mFal.spin();
comet.spin();
zoomi.spin();
