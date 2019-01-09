def fileNaming(names):
    dictionary = {}
    for name in names:
        if name not in dictionary:
            dictionary[name] = 1
        else:
            j = 1
            while True:
                temp = name + "(" + str(j) + ")"
                if temp not in dictionary:
                    dictionary[temp] = 1
                    break
                j += 1
                pass
    print(dictionary)
    return list(dictionary.keys())
