def fragileRotatingBox(boxWeakness, surfaceRoughness):
    bottom = ""
    top = ""
    right = ""
    left = ""

    bottom = boxWeakness[len(boxWeakness) - 1]
    top = boxWeakness[0][::-1]
    for i in range(len(boxWeakness)):
        e = boxWeakness[i]
        right += e[len(e) - 1]
        left += e[0]

    right = right[::-1]

    rotate = ""
    sides = [bottom, right, top, left]
    index = 0
    isGoing = True

    while isGoing:
        if len(rotate + sides[index]) <= len(surfaceRoughness):
            rotate += sides[index]
        else:
            for i in range(len(sides[index])):
                if(len(rotate + sides[index][i]) <= len(surfaceRoughness)):
                    rotate += sides[index][i]
                else:
                    isGoing = False
                    break

        index += 1
        if index == 4:
            index = 0

        pass
    ans = 0
    for i in range(len(rotate)):
        ans += int(rotate[i]) * int(surfaceRoughness[i])

    return ans
