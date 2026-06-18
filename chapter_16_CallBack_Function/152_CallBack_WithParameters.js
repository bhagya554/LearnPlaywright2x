function greetTester(name,callback){
    console.log(`Hello ${name}`)
    callback();
}

greetTester("Bhagya",function (){
    console.log("Let's start testing")
})

//callBack with parameter

function runTest(testName,callBack){
    const status="Pass"
    callBack(testName,status)
}

runTest("Login Test",function(name,result){
console.log(`Test Name: ${name} -> Status: ${result}`)
})


let bugs=["UI glitch","API timeout","Wrong Redirect"]
bugs.forEach(function (bug,index){
    console.log("Bug#" + (index+1) + " : " + bug)
})

console.log("No. of bugs: " + bugs.length)