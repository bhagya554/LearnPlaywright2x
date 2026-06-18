async function testapi(){
    try{
       let result= await Promise.reject("503 error")
    }

    catch(error){
        console.log('Error:',error)
    }

    finally{
        console.log("Execute always")
    }
}

testapi()