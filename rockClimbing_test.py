import unittest
import treeClimbing


class TreeClimbingTests(unittest.TestCase):
    # assertEqual(a, b)
    # checks that a == b
    def test(self):
        branches = [[3, 10],
                    [6, 9],
                    [7, 2],
                    [10, 7],
                    [11, 1],
                    [12, 2],
                    [18, 11]]

        friends = [[4, 1],
                   [7, 10],
                   [6, 2],
                   [7, 6]]
        answer = treeClimbing.treeClimbing(branches, friends)
        self.assertIs(answer, 1)

    def test2(self):
        branches = [[7, 9],
                    [8, 6],
                    [18, 8],
                    [21, 12],
                    [26, 9]]

        friends = [[8, 4],
                   [11, 2],
                   [4, 4],
                   [3, 5],
                   [10, 6],
                   [12, 3]]
        answer = treeClimbing.treeClimbing(branches, friends)
        self.assertIs(answer, 3)


if __name__ == '__main__':
    unittest.main()


# run : python -m unittest rockClimbing_test.py -v
