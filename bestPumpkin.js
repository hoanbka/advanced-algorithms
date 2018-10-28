function bestPumpkin(design, pumpkinDimensions) {
    let cnt = 0;
    let maxWidth;
    let first, last;
    let arr = [];

    function swap([a, b]) {
        return a < b ? [a, b] : [b, a];
    }

    for (let i = 0; i < design.length; i++) {
        if (design[i].indexOf('#') !== -1) {
            if (first == undefined) first = i;
            else last = i;

            arr.push(design[i].indexOf('#'));
            arr.push(design[i].lastIndexOf('#'))
        }
    }

    let height = last == undefined ? 1 : last - first + 1;

    arr.sort((a, b) => a - b)
    maxWidth = arr[arr.length - 1] - arr[0] + 1;
    let standardRatio = height < maxWidth ? height / maxWidth : maxWidth / height;

    let min = 10e5;
    let area;
    let best = 0;

    for (let i = 0; i < pumpkinDimensions.length; i++) {
        let processor = swap(pumpkinDimensions[i]);

        let absDiff = Math.abs(processor[0] / processor[1] - standardRatio);
        if (absDiff < min) {
            min = absDiff;
            area = processor[0] * processor[1];
            best = i;

        } else if (absDiff == min) {
            if (processor[0] * processor[1] > area) {
                area = processor[0] * processor[1];
                best = i;
            }
        }

    }

    return best;
}

let design = ["..............................",
    "..............................",
    ".........#....................",
    "........##............#.......",
    ".......###...........###......",
    ".......###..........####......",
    "......###...........###.......",
    ".....######........######.....",
    ".....#######.......#######....",
    "..............................",
    "...............#..............",
    "..............###.............",
    ".....#.......#####............",
    ".....#....................#...",
    ".....##.#................##...",
    "......####............#..#....",
    "......####..##..###..#####....",
    "........#################.....",
    ".........###############......",
    "...........#..##...##.........",
    ".............................."
]
let pumpkinDimensions = [
    [14, 22],
    [9, 16],
    [11, 7],
    [33, 23],
    [42, 25]
]

console.log(bestPumpkin(design, pumpkinDimensions)); // 3