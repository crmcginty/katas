import unittest
import random

class Player():
  def __init__(self, name):
    self.name = name
    self.points = 0

  def getName(self):
    return self.name

  def getPoints(self):
    return self.points
    
  def winPoint(self):
    self.points += 1

class Tennis():
  def __init__(self, players):
    self.players = players
    self.game = Game()

  def getPlayers(self):
    return self.players

  def playerWins(self, player):
    return self.players[player]
    
class Game():
  def __init__(self):
    self.points = [0, 15, 30, 40]

  

class testTennis(unittest.TestCase):

    def test_player_has_name(self):
      name = "Jo"
      self.assertEqual(Player(name).getName(), name)

    def test_player_has_no_points(self):
      self.assertEqual(Player("Jo").getPoints(), 0)

    def test_tennis_has_two_players(self):
      players = [
        Player("Jo"),
        Player("Sam")
      ]
      self.assertEqual(len(Tennis(players).getPlayers()), 2)

    def test_player_can_win(self):
      tennis = Tennis([
        Player("Jo"),
        Player("Sam")
      ])
      player = random.randint(1, 2)
      self.assertIn(tennis.playerWins(player), tennis.getPlayers())



if __name__ == '__main__':
    unittest.main()