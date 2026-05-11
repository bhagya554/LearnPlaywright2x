//let - block scoped

let retryCount=0
retryCount=retryCount+1
retryCount=retryCount+1
console.log(retryCount)

//let retryCount = 5;

//let retryCount = 5; SyntaxError: Identifier 'retryCount' has already been declared
// ❌ SyntaxError: redeclaration not allowed

let testStatus="pending"
if(testStatus==="pending"){
    let executionTime=2000
    console.log("execution time: " ,executionTime)
}

console.log(executionTime)//// ReferenceError: executionTime is not defined

// {} - Block 
// if(){} 
// funcion name(){}


// let = loyal
// var = varirable / triator

let name = "pending";
name = "done";//reassign is allowed