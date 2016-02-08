function sum() {
  var ourSum = 0;
  for (var i  = 0; i < arguments.length; i++) {
    ourSum += arguments[i];
  }
  return ourSum;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));
