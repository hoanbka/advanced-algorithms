def bestPumpkin(design, pumpkinDimensions):
    width = 0
    height = 0

    dimensions = findDesignDimensions(design)
    width = dimensions[3] - dimensions[2] + 1
    height = dimensions[1] - dimensions[0] + 1

    base = width / height if width <= height else height / width

    # solve
    minValue = 1
    area = 0
    best = -1

    for i in range(len(pumpkinDimensions)):
        pumpkin = swap(pumpkinDimensions[i])

        diff = abs(pumpkin[0] / pumpkin[1] - base)

        if diff < minValue:
            minValue = diff
            area = pumpkin[0] * pumpkin[1]
            best = i
        elif diff == minValue:
            if pumpkin[0] * pumpkin[1] > area:
                area = pumpkin[0] * pumpkin[1]
                best = i
    return best


def findDesignDimensions(design):
    top = -1
    bottom = 22
    right = -1
    left = 31

    for i in range(len(design)):
        if design[i].find('#') != -1:
            if top == -1:
                top = i
                bottom = i
            else:
                bottom = i

            left = min(left, design[i].find('#'))
            right = max(right, design[i].rfind('#'))

    return [top, bottom, left, right]


def swap(arr):
    return [arr[0], arr[1]] if arr[0] <= arr[1] else [arr[1], arr[0]]
