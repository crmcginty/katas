/* 
# 1 [Easy]
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

describe("Daily Code Problem 1 - Easy", () => {
  function randomArray(length, min, max) {
    return Array.from({length: length}, () => Math.floor(Math.random() * (max - min) + min));
  }

  it("can return whether any 2 numbers from a list add up to n", () => {
    const randomArr = randomArray(5, 1, 10);
    
  });

});