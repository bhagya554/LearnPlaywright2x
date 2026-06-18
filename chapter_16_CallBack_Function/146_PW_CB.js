function test(testName,callme){
    console.log("TestName is: " + testName)
    callme();
}
import {test} from '@playwright/test'
test('Login Test',()=>{
    console.log("Automating Test")
})




