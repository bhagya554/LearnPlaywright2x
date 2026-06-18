console.log("Test 1: started")

setTimeout(function (){
    console.log("Test 2: API response received") 
},2000)

console.log("Test 3: moving to next step")

//Asynchronous code runs later, without blocking the rest of the program.
/*✅ 4. Easy real-life analogy
🧑‍🍳 Cooking example
Synchronous:
-------------
Cook rice
Wait until done
Then cook curry

👉 Slow, blocked

**************************************

Asynchronous:
--------------
Start cooking rice
While it's cooking → chop vegetables
Continue other work

👉 Faster, non-blocking ✅

Key idea:
JavaScript does NOT wait for async tasks to finish.


*/