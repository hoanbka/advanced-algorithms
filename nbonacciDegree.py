def nbonacciDegree(sequence):
    s = sequence[0]

    for i in range(1, len(sequence)):
        if s == sequence[i]:
            j = i
            tmp = s

            while j < len(sequence) - 1:
                tmp -= sequence[j - i]
                tmp += sequence[j]

                if tmp != sequence[j + 1]:
                    break
                j +=1
                pass
            if j == len(sequence) - 1:
                return i

        s += sequence[i]
    return -1
