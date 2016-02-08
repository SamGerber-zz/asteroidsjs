Function.prototype.myBind = function(context) {
  var fn = this;
  var args = arguments;
  // console.log("Arguments: ",arguments);
  return function() {
    var combinedArgs = [].slice.apply(args).
        concat([].slice.apply(arguments));
    console.log(combinedArgs, args, arguments);
    return fn.apply(context,combinedArgs.slice(1));
  };
};

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound, person) {
  console.log(this.name + " says " + sound + " to " + person + "!");
  return true;
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

console.log(markov.says("meow", "Ned"));
// Markov says meow to Ned!
// true

console.log(markov.says.myBind(breakfast, "meow", "Kush")());
// Breakfast says meow to Kush!
// true

console.log(markov.says.myBind(breakfast)("meow", "a tree"));
// Breakfast says meow to a tree!
// true

console.log(markov.says.myBind(breakfast, "meow")("Markov"));
// Breakfast says meow to Markov!
// true

var notMarkovSays = markov.says.myBind(breakfast);
console.log(notMarkovSays("meow", "me"));
// Breakfast says meow to me!
// true
