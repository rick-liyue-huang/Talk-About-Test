var result = add(3, 7);
var expected = 10;

if (result !== 10) {
  throw Error(`3 + 7 should be ${expected}, but the result is ${result}`);
}

var result = minus(3, 3);
var expected = 0;

if (result !== 0) {
  throw Error(`3 - 3 should be ${expected}, but the result is ${result}`);
}
