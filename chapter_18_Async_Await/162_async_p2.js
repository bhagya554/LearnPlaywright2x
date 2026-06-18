function getToken() {
    return Promise.resolve("abc123")
}


async function run() {
    let token = await getToken()
    console.log(token)
}

run()

/*
When a function returns a Promise, to get the resolved value from a Promise, we use either:
.then() ✅
await ✅

Using .then()
--------------
getToken().then(token => {
    console.log(token);
});

Using await
-------------
async function run() {
    let token = await getToken();
    console.log(token);
}

when we don't use await / .then() we just get the Promise object, not the value.
---------------------------------------------------------------------------------
let token = getToken();
console.log(token);

Output:
Promise { 'abc123' }
----------------------------------------------------------
await returns only the fulfilled value
❌ For rejected promises, it throws an error instead of returning a value
Ex:

function success() {
    return Promise.resolve("OK");
}

function failure() {
    return Promise.reject("Error occurred");
}

Case 1: Fulfilled Promise
--------------------------
async function test() {
    let result = await success();
    console.log(result);
}

test();

Output:
OK
-------------
Case 2: Rejected Promise
------------------------------

async function test() {
    let result = await failure();
    console.log(result); // ❌ never runs
}

test();

output:
This will throw an error:
Uncaught (in promise) Error occurred

*/


/*
In Playwright, most action methods like goto() and click() return Promises.
We use await to pause execution until the operation completes,
and it either resolves successfully or throws an error if it fails.
*/


