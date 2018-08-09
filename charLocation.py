def charLocation(tex, wid, ch):
    cnt = 0
    s = tex[0]
    ans = []

    for i in range(1, len(tex)):
        if i % wid == 0:
            if cnt % 2 != 0:
                s = s[::-1]
                # s = "".join(reversed(s))

            indices = charPos(s, ch)
            if len(indices) > 0:
                for j in range(len(indices)):
                    ans.append([cnt, indices[j]])

            s = tex[i]
            cnt += 1

        else:
            s += tex[i]

    if cnt % 2 != 0 and len(s) < wid:
        s = s[::-1]
        diff = wid - len(s)
        s = ' ' * diff + s

    indices = charPos(s, ch)
    if len(indices) > 0:
        for j in range(len(indices)):
            ans.append([cnt, indices[j]])
    return ans


def charPos(s, c):
    ans = []

    for i in range(len(s)):
        if s[i] == c:
            ans.append(i)
    return ans
