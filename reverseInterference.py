def reverseInterference(originalA, originalB, broadcastA, broadcastB):
    count = 0
    tmp = 0
    for i in range(len(originalA)):
        if originalA[i] == broadcastA[i] and originalB[i] == broadcastB[i]:
            if tmp != 0:
                count += 1
                tmp = 0
        elif originalA[i] == broadcastB[i] and originalB[i] == broadcastA[i]:
            tmp += 1
            if tmp == 3:
                count += 1
                tmp = 0
        else:
            return -1

    if tmp != 0:
        count += 1
    return count
