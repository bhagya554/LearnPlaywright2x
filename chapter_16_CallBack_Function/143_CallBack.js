function orderReady(){
    console.log("Actual Function - Your order is ready")
}

function placeOrder(item,callme){
    console.log("Place order of item: " +item)
    callme();
}

// 3 ways to call the call back function
//first way - call a function that is implemented separately
placeOrder("burger",orderReady)

//second way - using anonymous function
placeOrder("pizza",function () {
    console.log("Anonymous Fn - Your order is ready")
})

//third way - using arrow function
placeOrder("momos",() => {
    console.log("Arrow Fn - Your order is ready")
})