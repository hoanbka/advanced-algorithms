function bestFriendNames(name1, name2) {
	name1 = name1.toUpperCase();
	name2 = name2.toUpperCase();


	map = new Map();
	map.set('A',1)
	map.set('B',2)
	map.set('C',3)
	map.set('D',4)
	map.set('E',5)
	map.set('F',6)
	map.set('G',7)
	map.set('H',8)
	map.set('I',9)
	map.set('J',10)
	map.set('K',11)
	map.set('L',12)
	map.set('M',13)
	map.set('N',14)
	map.set('O',15)
	map.set('P',16)
	map.set('Q',17)
	map.set('R',18)
	map.set('S',19)
	map.set('T',20)
	map.set('U',21)
	map.set('V',22)
	map.set('W',23)
	map.set('X',24)
	map.set('Y',25)
	map.set('Z',26)

	var n1 = 0, n2 = 0;
	for(var i = 0;i< name1.length;i++){
        if(name1[i] !=' ') n1 += map.get(name1[i]);
	 	
	}

	for(var i = 0;i< name2.length;i++){
		if(name2[i] != ' ') n2 += map.get(name2[i]);
	}
    
  
	return n1 == n2;

}