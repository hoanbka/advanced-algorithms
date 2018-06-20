function fileNaming(names) {
    let map = new Map();
    let ans = [];

    for (let i = 0; i < names.length; i++) {
        if (!map.has(names[i])) {
            ans.push(names[i]);
            map.set(names[i], 1);
        } else {
            ans.push(names[i] + '(' + (map.get(names[i])) + ')');
            map.set(names[i] + '(' + (map.get(names[i])) + ')', 1);
            map.set(names[i], map.get(names[i]) + 1);
        }
    }
    return ans;
}

let names = ["doc", "doc", "image", "doc(1)", "doc"];
//          ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]

console.log(fileNaming(names))