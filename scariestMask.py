def scariestMask(mask):
    count = 0
    for i in range(len(mask)):
        low = 0
        high = len(mask[i]) - 1

        while low < high:
            if mask[i][low] != mask[i][high]:
                count += 1
            low += 1
            high -= 1
            pass
    return count
