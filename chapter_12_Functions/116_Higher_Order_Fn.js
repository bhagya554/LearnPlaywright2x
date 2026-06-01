//Higher Order Function
// A function that takes function as an argument or returns a function

function runWithLoggin(testFn,testName){
    let result=testFn()
    return `${testName} is ${result}`
}

function loginTest(){
    return "pass"
}

function loginTestFailed(){
    return "failed"
}

console.log(runWithLoggin(loginTest,"Login Test"))
console.log(runWithLoggin(loginTestFailed,"Dashboard Test"))