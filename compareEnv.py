def compareEnv(a, b):
    mapA = {}
    mapB = {}

    for i in range(len(a)):
        temp = a[i].split("=")
        mapA[temp[0]] = temp[1]

    for i in range(len(b)):
        temp = b[i].split("=")
        mapB[temp[0]] = temp[1]

    aKeys = mapA.keys()
    bKeys = mapB.keys()
    res = []

    for i in range(len(aKeys)):
        if aKeys[i] not in mapB:
            res.append(aKeys[i] + ' is only in A')
        elif mapB[aKeys[i]] != mapA[aKeys[i]]:
            res.append(aKeys[i] + ' is different')

    for i in range(len(bKeys)):
        if bKeys[i] not in mapA:
            res.append(bKeys[i] + ' is only in B')
    res.sort()
    return res
