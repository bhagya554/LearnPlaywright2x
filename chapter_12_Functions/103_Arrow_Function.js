//Arrow Function(ES6)
const greet = function (name1){
    return "Hi " + name1
}

let result=greet('bhagay')
console.log(result)

/*
If you want to make normal function as arrow function:
Remove 'function' keyword
Remove 'return' keyword
Remove 'name of function'
Remove {} curly braces
use =>

We can't use arrow function if there is no return type    

*/
const greet2 = (name1) => "Hi "+name1;
let r2 = greet2("chinni")
console.log(r2)


const doubleIt=n => n*2

let a=doubleIt(12)
console.log(a)

const printIt=name => console.log("Print the name: ",name)
printIt('bhagya')
