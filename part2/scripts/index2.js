class Transport {
    constructor(type, price, brand, image) {
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }
    getInfo() {
        return `Type: ${this.type}, brand: ${this.brand}`;
    }
    getPrice() {
        return `Price: ${this.price}`;
    }
    getImageSrc() {
        return `Link to photo: ${this.image}`;
    }
}

//Создаем класс Car, который наследует от Transport
class Car extends Transport {
    constructor(type, price, brand, image, doors) {
        super(type, price, brand, image);
        this.doors = doors;
    }
    getDoorsCount() {
        return `Quantity doors: ${this.doors}`;
    }
}

// Создаем класс Bike, который наследует от Transport
class Bike extends Transport {
    constructor(type, price, brand, image, maxSpeed) {
		super(type, price, brand, image);
		this.maxSpeed = maxSpeed;
	}
    getMaxSpeed() {
        return `Max speed: ${this.maxSpeed}`;
    }
}
const vehicles = data.map((vehicle) => {
	if (vehicle.type === 'car') {
		return new Car(vehicle.type, vehicle.price, vehicle.brand, vehicle.image, vehicle.doors);
	} else if (vehicle.type === 'bike') {
		return new Bike(vehicle.type, vehicle.price, vehicle.brand, vehicle.image, vehicle.maxSpeed);
	}
});
vehicles.forEach((vehicle) => {
	console.log(vehicle.getInfo());
	console.log(vehicle.getPrice());
	console.log(vehicle.getImageSrc());
	if (vehicle instanceof Car) {
		console.log(vehicle.getDoorsCount());
	}
	if (vehicle instanceof Bike) {
		console.log(vehicle.getMaxSpeed());
	}
});


