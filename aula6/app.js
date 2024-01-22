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


const loadData = async (url) => {
 

    const request = await fetch(url)
    const result = await request.json()

    return result
}

window.onload = async () => {

 const data = await loadData("data.json");
 const sortedData = data.sort((a, b) => a.type.localCompare3(b.type))

 console.log(data)

}
