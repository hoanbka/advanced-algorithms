function bestPumpkin(design, pumpkinDimensions) {
    let width, height;

    function swap([a, b]) {
        return a < b ? [a, b] : [b, a];
    }

    let [top, bottom, left, right] = getBoudingDimentions(design);

    height = bottom - top + 1;
    width = right - left + 1

    let standardRatio = height < width ? height / width : width / height;

    let min = 1;
    let area;
    let best = 0;

    for (let i = 0; i < pumpkinDimensions.length; i++) {
        let pair = swap(pumpkinDimensions[i]);

        let absDiff = Math.abs(pair[0] / pair[1] - standardRatio);
        if (absDiff < min) {
            min = absDiff;
            area = pair[0] * pair[1];
            best = i;

        } else if (absDiff == min) {
            if (pair[0] * pair[1] > area) {
                area = pair[0] * pair[1];
                best = i;
            }
        }

    }

    return best;
}

function getBoudingDimentions(design) {
    let top, bottom, right = -1,
        left = 31;

    for (let i = 0; i < design.length; i++) {
        if (design[i].indexOf('#') !== -1) {
            if (top == undefined) {
                top = i;
                bottom = i;
            } else bottom = i;

            left = Math.min(left, design[i].indexOf('#'))
            right = Math.max(right, design[i].lastIndexOf('#'))
        }
    }

    return [top, bottom, left, right]
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
