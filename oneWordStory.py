def oneWordStory(words, sentences):
    ans = []
    picked = {}

    # a dictionary to keep track what indices in words were picked already
    for i in range(len(words)):
        picked[i] = False

    for i in range(len(sentences)):

        ans.append(sentences[i])
        lastWord = sentences[i][sentences[i].rfind(' ')+1:]
        # print lastWord
        maxDistance = -1
        selectedWord = ""
        index = None

        for j in range(len(words)):
            if picked[j] == True:
                continue
            if maxDistance == -1:
                maxDistance = levenshtein(lastWord, words[j])
                print maxDistance
                # print words[j]
                selectedWord = words[j]
                index = j
                continue

            maxL = levenshtein(lastWord, words[j])
            if maxL > maxDistance:
                maxDistance = maxL
                selectedWord = words[j]
                index = j
            elif maxDistance == maxL:
                if words[j] > selectedWord:
                    selectedWord = words[j]
                    index = j

        picked[index] = True
        ans.append(selectedWord)
    print ans
    return ' '.join(ans)


def levenshtein(s1, s2):
    if len(s1) < len(s2):
        return levenshtein(s2, s1)

    # len(s1) >= len(s2)
    if len(s2) == 0:
        return len(s1)

    previous_row = range(len(s2) + 1)
    for i, c1 in enumerate(s1):
        current_row = [i + 1]
        for j, c2 in enumerate(s2):
            # j+1 instead of j since previous_row and current_row are one character longer
            insertions = previous_row[j + 1] + 1
            deletions = current_row[j] + 1       # than s2
            substitutions = previous_row[j] + (c1 != c2)
            current_row.append(min(insertions, deletions, substitutions))
        previous_row = current_row

    return previous_row[-1]
