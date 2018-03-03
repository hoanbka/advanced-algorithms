var Person = function(name, age, address){
	this.name = name;
	this.age= age;
	this.address= address;

	this.getInfo = function(){
		return this.age + this.name+ this.address;
	}
}

var person = new Person("hoan",24,"thai binh");
console.log(person.getInfo());