//Real QA scenario: Login to app.vwo.com
//openBrowser()
//goToLoginPage()
//enterCredentials()
//clickLogin()


function openBrowser(callback){
    setTimeout(function(){
        console.log("Step 1: Opening chrome browser")
        callback();
    },1000);
}
function goToLoginPage(callback){
    setTimeout(function(){
    console.log("Step 2: Navigated to app.vwo.com")
    callback();
    },2000);
}

function enterCredentials(callback){
    setTimeout(function(){
    console.log("Step 3: Entered username and password")
    callback();
    },1000);
}

function clickLogin(callback){
    setTimeout(function(){
    console.log("Step 4: Clicked on Login")
    callback();
    },1000);
}

//This is callBack hell
openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test Complete")
            })
        })
    })
})
