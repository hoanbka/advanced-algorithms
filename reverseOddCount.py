#
#  Reverse the order of all characters in a string that occur an odd amount of times (spaces included). 
# All other characters should remain in the same position; only odd-frequency characters are eligible to swap with each other.
#  Case-sensitivity is important, so for example "a" is considered different than "A" when counting character frequencies


def reverseOddCount(s):
    o = {}
    a = list(s)

    for i in range(len(a)):
        if a[i] in o.keys():
            o[a[i]] += 1
        else:
            o[a[i]] = 1

    j = len(a)-1
    i = 0
    while i < j:

        if o[a[i]] % 2 != 0:
            if o[a[j]] % 2 != 0:
                [a[i], a[j]] = [a[j], a[i]]
                i+=1
                j-=1
            else:
                j-=1
        else:
            i+=1

        pass
    return ''.join(a)
