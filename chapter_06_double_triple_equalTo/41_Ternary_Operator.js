let rajkumar_age = 18
let rj_go_goa = rajkumar_age >= 18 ? "RJ will go to goa" : "RJ won't go to goa"
console.log(rj_go_goa)


let actualStatusCode = 200
let expectedStatusCode = 200
let testResult = actualStatusCode === expectedStatusCode ? "PASS" : "FAIL"
console.log(testResult)

let environment = "staging";
let baseURL = environment === "Prod" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseURL)


let isCI=true
let browserMode=isCI?"headless":"headed"
console.log("Launching browser in",browserMode,"mode")

let responseTime=850;
let sla=1000;//service level agreement
let slaStatus=responseTime<=sla?"Within SLA":"SLA breached"
console.log(`Response: ${responseTime}ms - ${slaStatus}`)

//Nested Ternary
//Multiple condition we can have

let age=21
let is_pramod_goto_goa=age>18?(age>20?"He will go to goa and also can drink":"Not allowed to drink"):"No, he will not"
console.log(is_pramod_goto_goa)

let statusCode=404
let category=statusCode<300?"Success":
                statusCode<400?"Redirect":
                    statusCode<500?"Client error":"Server error";
console.log(`Status ${statusCode} - Category ${category}`);

let temp=35
let feel=(temp>=40)?"Very Hot":
         (temp>=30)?"Hot":
         (temp>=20)?"Warm":
         (temp>=10)?"Cool":"Cold";
         
console.log("Temperature: " + temp + "| Feel: " + feel);         