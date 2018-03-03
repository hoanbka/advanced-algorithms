function mysteriousNumber(n) {
	var map = new Map();

	map.set(1,'Q');
	map.set(2,'W');
	map.set(3,'E');
	map.set(4,'R');
	map.set(5,'T');
	map.set(6,'Y');
	map.set(7,'U');
	map.set(8,'I');
	map.set(9,'O');
	map.set(10,'P');

	map.set(11,'A');
	map.set(12,'S');
	map.set(13,'D');
	map.set(14,'F');
	map.set(15,'G');

	map.set(16,'H');
	map.set(17,'J');
	map.set(18,'K');
	map.set(19,'L');
	map.set(20,'Z');
	map.set(21,'X');
	map.set(22,'C');
	map.set(23,'V');
	map.set(24,'B');
	map.set(25,'N');
	map.set(26,'M');

	return map.get(n);
}

console.log(mysteriousNumber(22));
