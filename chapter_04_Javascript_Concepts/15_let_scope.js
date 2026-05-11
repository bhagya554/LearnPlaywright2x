let a = 10//global scope
console.log(a)//10
function printHello() {
    console.log("Hello")
    let a = 20//local scope
    console.log("Inside function: ", a)
    if (true) {
        let a = 30
        console.log("Inside if block: ", a)//30
    }
    console.log("Outside If block: ", a)
}
printHello()