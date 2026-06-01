function retry(testName,maxRetries=3,delay=1000){
    console.log(`Retrying ${testName} upto ${maxRetries} times, ${delay} as delay`)
    }

retry("Login Test")
retry("Reg Test",5,2000)    