var lines = readline().split(' ').map(Number);
var n = lines[0], m = lines[1], a = lines[2];

print(Math.ceil(n/a)*Math.ceil(m/a));