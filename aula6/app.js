// let user = {
//     id: 0,
//     name: "tomas",
//     age: 20,
//     gender: "male",
//     dob: "14-03-2004",
//     hobbie: ("musica", "passear", "code")
// }

// import Car from "../../Car.js"
// import Motorcycle from "../../Motorcycle.js"

// const car = new Car()
// const motorcycle = new Motorcycle()


const loadData = async () => {
 

    const request = await fetch("data.json")
    const result = await request.json()

    console.log(result)
}

window.onload = async () => {

 const data = loadData();
 console.log(data)

}
