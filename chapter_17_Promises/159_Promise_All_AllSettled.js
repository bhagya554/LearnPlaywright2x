/*
--------Output when all promises resolved--------
All Checks are successful:  [ 'Auth Failed', 'DB Failed', 'Cache OK' ]
*/

let checkAuth = Promise.resolve("Auth OK")
let checkDB = Promise.resolve("DB OK")
let checkCache = Promise.resolve("Cache OK")


Promise.all([checkAuth, checkDB, checkCache])
    .then(function (msg) {
        console.log("All Checks are successful: ", msg)
    })
    .catch(function (msg) {
        console.log("Some checks got failed: " + msg)
    })
/*
--------Output when any of the promises rejected--------
Some checks got failed: Auth Failed
*/

let checkAuth1 = Promise.reject("Auth Failed")
let checkDB1 = Promise.reject("DB Failed")
let checkCache1 = Promise.resolve("Cache OK")


Promise.all([checkAuth1, checkDB1, checkCache1])
    .then(function (msg) {
        console.log("All Checks are successful: ", msg)
    })
    .catch(function (msg) {
        console.log("Some checks got failed: " + msg)
    })

/*
if any one promise rejects, Promise.all immediately rejects and:

The .then() block will NOT run
The .catch() block will run with the first rejection reason

But importantly:
👉 All promises still continue executing in the background (they are not cancelled)

What happens step-by-step

checkAuth → ❌ rejects
checkDB → ❌ rejects
checkCache → ✅ resolves

👉 Promise.all sees the first rejection (checkAuth) and:

Immediately goes to .catch()
Ignores all .then() results

Output: Some checks got failed: Auth Failed

It prints only the first rejection reason (Auth Failed)
(DB Failed is ignored by Promise.all result)
*/


Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed"),
])
    .then(function (results) {
        results.forEach(function (result, index) {
            console.log("Test " + (index + 1) + ":" + result.status + "-" + (result.value || result.reason))

        })
    })

//-------------------results array content----------------------
/*

[
  { status: 'fulfilled', value: 'Test A Passed' },
  { status: 'rejected', reason: 'Test B Failed' },
  { status: 'fulfilled', value: 'Test C Passed' }
]
*/
Promise.allSettled([
    Promise.resolve("Test A Passed"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed"),
])
    .then(function (results) {
        console.log(results)
    })


// Promise.AllSettled concept is used for a test report —
// you want results for ALL tests,
// not just stop at the first failure.


Promise.all([
    Promise.resolve("API OK"),
    Promise.reject("DB Down"),
    Promise.resolve("Web OK")
])
.then(function(msg){
    console.log(msg)
})
.catch(function (err){
    console.log("Failed:",err)
})