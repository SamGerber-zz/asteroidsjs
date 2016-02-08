function curriedSum(numArgs) {
  var numbers = [];
  function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      return sum;
    }
    return _curriedSum;
  }
  return _curriedSum;
}
//
//
// var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
  var args = [];
  var fn = this;
  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(fn, args);
    }
    return _curry;
  }
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!
var f1 = sumThree.curry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(6); // = 30
console.log(result);

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
