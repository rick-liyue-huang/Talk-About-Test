function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

// export default { add, minus };

function expect(result) {
  return {
    toBe: function(actual) {
      if (result !== actual) {
        throw new Error(
          `expect value no equal, expect ${actual}, but result is ${result}`
        );
      }
    }
  };
}

function test(desc, fn) {
  try {
    fn();
    console.log(`${desc} success`);
  } catch (e) {
    console.log(`${desc} error ${e}`);
  }
}

test('test add', () => {
  expect(add(3, 7)).toBe(10);
});

test('test minus', () => {
  expect(minus(3, 7)).toBe(10);
});
