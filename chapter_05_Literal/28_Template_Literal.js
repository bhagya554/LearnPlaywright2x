let lang = "Java Script"
console.log(`${lang} prefers single quotes`)

let fname = "bhagya"
let fullName = `Hi ${fname} kudupudi`
console.log(fullName)

let env = "staging"
let userId = 1234
env = "production"
const apiUrl = `https://api-${env}.wipro.com/users/${userId}`;
console.log(`API url is: ${apiUrl}`)

//Playwright
const rowIndex = 3
const colName = "email"
const result = `[data-row="${rowIndex}"] [data-col="${colName}"]`
console.log(result)
//await page.locator(result).click();

//logs
const testName = "Login Test"
const status = "Failed"
const duration = 2.3
console.log(`${testName}: ${status} executed in ${duration} minutes`)

//screenshot
const testCase = "checkout_flow"
const timeStamp = Date.now();
console.log(`path:screenshots/${testCase}_${timeStamp}.png`)
//await page.screenshot({path:`screenshots/${testCase}_${timeStamp}.png`})

const username = "bhagya";
const role = "developer"
const payload = `{
"user":"${username}",
"role":"${role}",
"timestamp":"${new Date().toISOString()}"
}`;
console.log(payload)