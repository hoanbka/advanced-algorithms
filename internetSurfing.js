function internetSurfing(links, k, address) {
	var map = new Map();
	var first = [];
	var match = [];

	for(var i  =0;i< links.length;i++){
		first.push(links[i][0]);

		if(links[i][1]== address) match.push(links[i][0])
	}

	for(var i  = 0;i< first.length;i++){
		if(map.has(first[i])){
			map.set(first[i],map.get(first[i])+1);
		}else map.set(first[i],1);
	}

	var keys = Array.from(map.keys());
	console.log(keys)

	var res;
	for(var i = 0;i< keys.length;i++){
		if(match.indexOf(keys[i]) !==-1 && map.get(keys[i]) >=k){
			if(!res) res = keys[i];
			else{
				if(res[0] < keys[i][0]) res = keys[i];
			}
		}
	}

	console.log(res);
}	
var links= [["codefights.com","google.com"], 
 ["google.com","wikipedia.org"], 
 ["google.com","codefights.com"], 
 ["codefights.com","wikipedia.org"], 
 ["codefights.com","codefights.com"], 
 ["codefights.com","google.com"], 
 ["codefights.com","google.com"], 
 ["facebook.com","google.com"], 
 ["twitter.com","google.com"]]

internetSurfing(links,0,'wikipedia.org')