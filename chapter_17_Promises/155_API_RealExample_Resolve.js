/*
Think of a Promise like a delivery box:

You put something inside using resolve(value)
.then() is the person who opens the box
The argument (response) is what was inside


resolve(value) → stores value inside the Promise
.then(callback) → receives that value
The parameter (response) is automatically assigned that resolved value
*/


let apiCall1 = new Promise(function (resolve, reject) {
    resolve({ status: 200, body: "User Data" })
})


apiCall1.then(function (response) {
    console.log(response)
    console.log(response.status)
    console.log(response.body)
})











































