let testRun=new Promise(function (resolve,reject){
let apiCall=true
if(apiCall){
    resolve({"status":"done"})
}
else{
reject("Assertion Error")
}
})

testRun.then(function (data){
    console.log("Test is successful:", data)
})
.catch(function (data){
    console.log("Error Occurred: " + data)
})
.finally(function(){
    console.log("I will be executed always")
})