function openBrowser() {
    return new Promise(function (resolve, reject) {
        //code to open browser
        resolve("Opened the browser")
    })
}


function goToLogin() {
    return new Promise(function (resolve, reject) {
        //code to open login page
        resolve("Opened Login page")
    })
}


function enterCredentials() {
    return new Promise(function (resolve, reject) {
        //code to enter credentials
        resolve("Entered username and password")
    })
}


function clickOnLogin() {
    return new Promise(function (resolve, reject) {
        //code to click login button
        reject("Unable to click Login button")
    })
}

async function runTheE2E() {
    try {
        // console.log(await openBrowser());
        // console.log(await goToLogin());
        // console.log(await enterCredentials());
        // console.log(await clickOnLogin());
        //or above code also works
        //----------------------------
        let msg1=await openBrowser()
        console.log("Step 1: ",msg1)
        let msg2=await goToLogin()
        console.log("Step 2: ",msg2)
        let msg3=await enterCredentials()
        console.log("Step 3: ",msg3)
        let msg4=await clickOnLogin()
        console.log("Step 4: ",msg4)

    }
    catch (error) {
        console.log("Error caught: ",error)
    }

}
runTheE2E()