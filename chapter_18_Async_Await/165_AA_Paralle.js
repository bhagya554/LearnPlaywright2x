function apiCall(name){
    return new Promise(function (resolve){
        setTimeout(function(){
        resolve(name)
        },2000)
    })
}

async function parallelTest(){
    
    let [r1,r2,r3] =await Promise.all([
        apiCall("Auth Service"),
        apiCall("User Account Service"),
        apiCall("Support Page API")
    ])

    console.log(r1)
    console.log(r2)
    console.log(r3)
}

parallelTest()