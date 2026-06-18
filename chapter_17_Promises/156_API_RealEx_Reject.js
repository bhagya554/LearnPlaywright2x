/*
Promise is a constructor in JavaScript.
It expects a callback function (also called an "executor function") as its parameter.


That callback function:function(resolve, reject) { ... }
is automatically invoked by the Promise constructor and receives two arguments:
    >resolve → used to fulfill the promise
    >reject → used to reject the promise

What your code does
reject("500 Error");   
    >Immediately rejects the promise
    >The promise goes into the rejected state
    >The rejection value is "500 Error" 

------------ 
The callback (executor) function you pass to Promise, takes 2 functions (resolve and reject ) 
as the parameters  
function(resolve, reject) { ... }




✅ 1. resolve 
>A function provided by JavaScript
>You call it when the operation is successful 
        resolve(value);




✅ 2. reject 
>Also a function provided by JavaScript
>You call it when something goes wrong 
        reject(error);


✅ So in simple terms:
----------------------------
✅ The Promise constructor expects a callback function
✅ That callback function is given two functions as parameters: 
resolve (success function)
reject (failure function)

//.then() runs only when the promise is resolved successfully.That means the operation completed successfully.
//.catch() executes only when the promise is rejected (not resolved).That means an error occurred or something failed.
*/
let apiCall2 = new Promise(function (resolve, reject) {
    reject("500 Error")
    //resolve({status:200,body:"User Data"})
    //resolve("success")
})

apiCall2.then(function (data) {
    console.log("Data is success: " + data)//Ex: resolve("success")  output: success
    console.log("Data is success: " + data.status)//Exresolve({status:200,body:"User Data"}) output: 200
}).catch(function (data) {
    console.log("Error in the api response: " + data)
})