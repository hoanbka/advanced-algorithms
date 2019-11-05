def LongChain(n, mat):
    return bfs(mat)

def bfs(map):
    ans = []
    for i in range(len(map)):
        for j in range(len(map[i])):
            queue = [[i, j]]
            curr = []
            
            while len(queue) > 0:
                top = queue.pop()
                x , y = top[0], top[1]
                currValue = map[x][y]
                
                curr.append(currValue)
                
                directions = [[-1, 0], [1, 0], [0, 1], [0, -1]]
                for direction in directions:
                    _x, _y = direction[0], direction[1]
                    if x + _x >= 0  and x + _x <= len(map)-1 and y + _y >= 0 and y + _y <= len(map[i]) - 1 and \
                    map[x + _x][y + _y] == currValue + 1:
                        queue.append([x + _x, y + _y])
                        break
            if len(curr) > 1: ans.append(curr)
    ans.sort()
    if len(ans) == 0: return []
    return ans[0]