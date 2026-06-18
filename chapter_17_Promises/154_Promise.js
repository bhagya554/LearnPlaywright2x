let order = new Promise(function (resolve, reject) {
    let foodready = false
    if (foodready) {
        resolve("Food is ready.Pizza is delivered")
    }
    else {
        reject("Order cancelled due to heavy rain")
    }
})

console.log(order)

order.then(function (data) {
    console.log(data)
})
    .catch(function (data) {
        console.log(data)
    })

























































