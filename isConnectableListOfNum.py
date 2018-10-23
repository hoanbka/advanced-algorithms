def isConnectableListOfNum(listOfNums):
    listOfNums.sort()

    for i in range(len(listOfNums) - 1):
        if compareStrings(listOfNums[i], listOfNums[i + 1]):
            return False
    return True


def compareStrings(s1, s2):
    length = min(len(s1), len(s2))
    cnt = 0
    for i in range(length):
        if s1[i] == s2[i]:
            cnt += 1
        else:
            break
    return True if cnt == length else False
