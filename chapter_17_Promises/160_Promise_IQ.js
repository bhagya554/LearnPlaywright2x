// let p=new Promise(function (resolve,reject){
//     resolve(42)
// })

// p.then(function (msg){
//     console.log("Answer:",msg)
// })
// //------------------------------------------------------------------
// let q=new Promise(function (resolve,reject){
//     reject("Something broke")
// })


// q.catch(function (err){
//     console.log("Caught:",err)
// })

// //------------------------------------------------------------------
// let r=Promise.resolve(5)

// r.then(function (val){
//     return val*10
// }).then(function (val){
//     console.log("Result:",val)
// })

// //--------------------------------------------

// Promise.resolve(1)
//     .then(function (val){
//         console.log(val)
//         return val+1
//     })
//     .then(function (val){
//         console.log(val)
//         return val+1
//     })
//     .then(function (val){
//         console.log(val)
//     })
// //-------------------------------------

// Promise.resolve("start")
//     .then(function (val){
//         console.log(val)
//         throw new Error("Broke at step 2")
//     })
//     .then(function (){
//         console.log("this will not run")
//     })
//     .catch(function (err){
//         console.log("Caught:",err.message)
//     })

// //-------------------------------------

// Promise.reject("Test Failed")
    // .then(function (data){
        // console.log("Data:",data)
    // })
    // .catch(function (err){
        // console.log("Error:",err)
    // })
    // .finally(function (){
        // console.log("Cleanup done")
    // })
// -----------------------------------------

// Promise.resolve("Quick Win")
        // .then(function (msg){
            // console.log(msg)
// });
// 
// Promise.reject("Quick Loss")
        // .catch(function (msg){
            // console.log(msg)
// });        

//-----------------------------------------

let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");
// 
Promise.all([t1, t2, t3])
        .then(function (results) {
            console.log(results);
});

//Output: [ 'Login: PASS', 'Search: PASS', 'Logout: PASS' ]

//--------------------------------------------------------------------
let t4=Promise.resolve("PASS")
let t5=Promise.reject("FAIL")
let t6=Promise.resolve("PASS")

Promise.all([t4,t5,t6]).then(function(results){
    console.log("All: ", results)
}).catch(function(err){
    console.log("Stopped:" + err)
})

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function(results){
    results.forEach(function(result,index){
        let val=result.status ==="fulfilled" ? result.value : result.reason
        console.log("Test#"+(index+1)+ "->status: " +result.status + "->value: " + val)
    })
})