var a = 10//global scope
console.log(a)//10

//function scoped

function printHello() {
    console.log("Hello")
    a = 20//local scope
    console.log("Inside function: ", a)

    if (true) {
        a = 30
        console.log("Inside if block: ", a)//30
    }

    console.log("Outside If block: ", a)

}
printHello()
a = 50
console.log("global again: ", a)

