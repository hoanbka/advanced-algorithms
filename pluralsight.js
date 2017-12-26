class Vehicle {
 
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
 
  getName () {
    return this.name;
  }
 
  getType () {
    return this.type;
  }
 
}

class Car extends Vehicle {
 
  constructor (name) {
    super(name, 'car');
  }
 
   getName () {
    return 'It is a car: ' + super.getName();
  }
 
}

class Motobike extends Vehicle {
	constructor(name){
		super(name,'motobike')
	}
}


let car = new Car('Tesla');
console.log(car.getName()); // It is a car: Tesla
console.log(car.getType()); // car

let motobike = new Motobike('Honda');
console.log(motobike.getType())
console.log(motobike.getName())


console.log(Car.getName())