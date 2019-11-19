import unittest
import random

# add check to ensure argument order e.g. first arg word is a string  
class Rule():
  def __init__(self, word, rule):
    self.word = word
    self.rule = rule

class Rules():
  def __init__(self, num):
    self.num = num
    self.rules = [
      Rule("fizz", lambda num: self.num % 3 == 0),
      Rule("buzz", lambda num: self.num % 5 == 0)
    ]

class FizzBuzz():
  def __init__(self, word, rule):
    self.word = word
    self.rule = rule

  def say(self, number):
    if(self.rule):
      return self.word

    return number

class TestFizzBuzz(unittest.TestCase):

  # not working :(
  def test_it_returns_the_number(self):
    number  = random.randint(1, 1000)
    word = "abc"
    rule = lambda number: False
    self.assertEqual(FizzBuzz(word, rule).say(number), number)

  def test_if_the_rule_applies_say_the_word(self):
    number  = random.randint(1, 1000)
    word = "abcdef"
    rule = lambda number: True
    self.assertEqual(FizzBuzz(word, rule).say(number), word)

  # def test_it_returns_the_number(self):
  #   number  = random.randint(1, 1000)
  #   word = "foo"
  #   rule1 = Rules(number).rules[0]
  #   # rule2 = Rules(number).rules[1]
  #   self.assertEqual(FizzBuzz(word, rule1.rule).say(number), number)


if __name__ == '__main__':
    unittest.main()