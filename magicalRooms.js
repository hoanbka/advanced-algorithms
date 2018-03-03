function magicalRooms(rooms) {
    var hitcount = new Array(rooms.length).fill(0)
    for (var i = 0; i < rooms.length; i++) {
        hitcount[rooms[i]]++
    }

    var destinationroom = -1
    for (var i = 0; i < hitcount.length; i++) {
        if (hitcount[i] == 0) {
            destinationroom = i
        }
    }

    var currentroom = destinationroom
    var hitrooms = new Array(rooms.length).fill(false)
    var checkcounter = 0;

    while (hitrooms[currentroom] == false) {
        hitrooms[currentroom] = true
        if (hitrooms[rooms[currentroom]] == true) {
            break
        }
        checkcounter++
        currentroom = rooms[currentroom]
    }
    if (checkcounter != rooms.length - 1) {
        return [-1, -1]
    }
    return [currentroom, destinationroom]
}