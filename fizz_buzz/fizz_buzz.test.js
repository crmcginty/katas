
function fizzBuzz(num, rules) {

  let result = "";

  rules.forEach(rule => {
    if (rule.applies(num)) {
      result += rule.result;
    }
  });

  return result || num;
}

test('if no rules apply, return number', () => {
  let rule = {
    applies: () => { return false },
    result: ""
  }
  expect(fizzBuzz(2, [rule])).toEqual(2);
});

test('multiples of 3 say fizz', () => {
  let rule = {
    applies: (x) => { return x % 3 == 0 },
    result: "fizz"
  }
  expect(fizzBuzz(3, [rule])).toEqual(rule.result);
});

test('multiples of 5 say buzz', () => {
  let rule = {
    applies: (x) => { return x % 5 == 0 },
    result: "buzz"
  }
  expect(fizzBuzz(5, [rule])).toEqual(rule.result);
});

test('multiples of 3 and 5 say fizzbuzz', () => {
  let rule1 = {
    applies: (x) => { return x % 3 == 0 },
    result: "fizz"
  }

  let rule2 = {
    applies: (x) => { return x % 5 == 0 },
    result: "buzz"
  }
  expect(fizzBuzz(15, [rule1, rule2])).toEqual(rule1.result + rule2.result);
});
