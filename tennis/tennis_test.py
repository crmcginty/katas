import unittest

class Player():
  def __init__(self, name):
    self.name = name
    self.score = 0

  def getScore(self):
    return self.score

class TennisGame():
  def __init__(self, players):
    self.players = players

  def getPlayers(self):
    return self.players

class testTennis(unittest.TestCase):

    def test_player_score_is_zero(self):
      self.assertEqual(Player("Jo").getScore(), 0)

    def test_game_has_two_players(self):
      players = [
        Player("Jo"),
        Player("Sam")
      ]
      self.assertEqual(len(TennisGame(players).getPlayers()), 2)
    

if __name__ == '__main__':
    unittest.main()