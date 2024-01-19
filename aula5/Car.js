import Vehicle from "./Vehicle.js"

export default class Car extends Vehicle {

    constructor() {
        super()

        this.speed = 50

        console.log("car speed", this.speed)

    }
}

