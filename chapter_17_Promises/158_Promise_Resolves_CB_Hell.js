function openBrowser(){
    return new Promise(function(resolve,reject){
        //code to open browser
        resolve("Opened the browser")
    })
}

function goToLogin(){
    return new Promise(function(resolve,reject){
        //code to open login page
        resolve("Opened Login page")
    })
}

function enterCredentials(){
    return new Promise(function(resolve,reject){
        //code to enter credentials
        resolve("Entered username and password")
    })
}

function clickOnLogin(){
    return new Promise(function(resolve,reject){
        //code to click login button
        reject("Clicked Login button")
    })
}

openBrowser()
.then(function (msg){
    console.log("Step 1:",msg)
    return goToLogin()
})    
.then(function (msg){
    console.log("Step 2:",msg)
    return enterCredentials()
})
.then(function (msg){
    console.log("Step 3:",msg)
    return clickOnLogin()
})    
.then(function (msg){
    console.log("Step 4:",msg)  
})
.catch(function (err){
    console.log("Error occured in step: " ,err)
})
.finally(function (){
    console.log("Test Execution Done")
})


