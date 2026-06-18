console.log("Test 1: started")


setTimeout(function (){
    console.log("Test 2: API response received") 
},2000)

setTimeout(function (){
    console.log("Test 3: API response received") 
},3000)

setTimeout(function (){
    console.log("Test 4: API response received") 
},4000)

console.log("Test 5: moving to next step")

//setTimeout makes the callback function execute asynchronously.