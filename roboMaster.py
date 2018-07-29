def roboMaster(shots):
    red = {"red 1": 1, "red 2": 2, "red 3": 5, "red 4": 1, "red 5": 1, "red base": 10}
    blue = {"blue 1": 1, "blue 2": 2, "blue 3": 5, "blue 4": 1, "blue 5": 1, "blue base": 10}
    hasBotDestroyedRed = False
    hasBotDestroyedBlue = False


    for e in shots:
        damage = 0.05 if e[2] == "17mm" else 0.5
        gotFiredBot = e[1]

        if gotFiredBot == "red base":
            if hasBotDestroyedRed:
                red[gotFiredBot] -= damage
            else:
                continue
        elif gotFiredBot == "blue base":
            if hasBotDestroyedBlue:
                blue[gotFiredBot] -= damage
            else:
                continue

        if gotFiredBot in blue:
            blue[gotFiredBot] -= damage
            if blue[gotFiredBot] <= 0:
                hasBotDestroyedBlue = True
        else:
            red[gotFiredBot] -= damage
            if red[gotFiredBot] <=0:
                hasBotDestroyedRed = True

    if red["red base"] < blue["blue base"]:
        return "blue"
    elif red["red base"] > blue["blue base"]:
        return "red"

    redValues = sum(red.values())
    blueValues = sum(blue.values())

    if redValues == blueValues:
        return "draw"
    elif redValues > blueValues:
        return "red"
    else:
        return "blue"





