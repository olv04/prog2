import Vehicle from "./Vehicle.js"

export default class Motorcycle extends Vehicle {

    constructor() {
        super()

        this.speed = 30

        console.log("moto speed", this.speed)

    }
}

