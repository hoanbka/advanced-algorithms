def treeClimbing(branches, friends):
    ans = 0
    for i in range(len(friends)):
        arr = branches[:]
        arr.insert(0, [0, friends[i][1]])
        isGoing = True
        currHeight = arr[0][0]

        for j in range(1, len(arr)):
            if arr[j][0] - currHeight > friends[i][0]:
                isGoing = False
                break
            else:
                if arr[j][1] >= friends[i][1]:
                    currHeight = arr[j][0]
        if isGoing == True and friends[i][1] <= arr[len(arr)-1][1]:
            ans += 1
    return ans


branches = [[19, 36],
            [77, 115],
            [79, 51],
            [109, 246],
            [121, 247],
            [195, 218],
            [198, 247],
            [258, 551],
            [275, 593],
            [335, 358],
            [340, 87],
            [352, 575],
            [361, 355],
            [380, 443],
            [406, 437],
            [459, 482],
            [540, 458],
            [635, 181],
            [707, 489],
            [739, 406],
            [834, 56],
            [863, 213],
            [949, 361],
            [1021, 221],
            [1099, 215],
            [1165, 483],
            [1216, 5],
            [1291, 592],
            [1297, 297],
            [1331, 589]]
friends = [[36, 400],
           [95, 223],
           [232, 61],
           [737, 231],
           [35, 114],
           [374, 196],
           [566, 344],
           [420, 64],
           [133, 367],
           [450, 157],
           [629, 357]]
test = treeClimbing(branches, friends)  # expected output: 7
print(test)
