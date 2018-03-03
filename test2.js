
var agentStatus = {};

var isAgentEnable= function(agentId) {
	 agentStatus[agentId] = true;
    var id = agentId ? agentId.toString() : '';
    return !!agentStatus[id];
}

console.log(isAgentEnable(''));
console.log(isAgentEnable('hello'));

var str = '';
var str2 = 'hihi';
console.log(!!str);
console.log(!!str2);