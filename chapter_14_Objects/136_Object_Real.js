const ENV={
    BASE_URL:"https://staging.myapp.com",
    TIMEOUT:5000,
    RETRIES:2,
    BROWSER:"Chrome"
}

const EXPECTED_RESPONSE={
    status:200,
    body:{
        user:{role:"admin",active:true}
    }
}

const config={
    //base urls
    baseUrl:"http://localhost:3000",
    apiBaseUrl:"http://localhost:3000/api",

    testUser:{
        username:"testuser@example.com",
        password:"SecurePass123"
    },

    //logging
    loglevel:"INFO",

    //retry configuration
    retryCount:parseInt(process.env.RETRY_COUNT||'3',10)
}


/* retryCount:parseInt(process.env.RETRY_COUNT||'3',10) - Step-by-step explanation
1. process.env.RETRY_COUNT

Reads the environment variable named RETRY_COUNT.
Environment variables are always strings (or undefined if not set).
Example:RETRY_COUNT=5 Then process.env.RETRY_COUNT // "5"

*/