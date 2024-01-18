// let user = {
//     id: 0,
//     name: "tomas",
//     age: 20,
//     gender: "male",
//     dob: "14-03-2004",
//     hobbie: ("musica", "passear", "code")
// }

class Vehicle {

     speed = 10

    constructor() {

    }
}

class Car extends Vehicle {

    constructor() {
        super()

        this.speed = 50

        console.log("moto speed", this.speed)

    }
}


const car = new Car()
