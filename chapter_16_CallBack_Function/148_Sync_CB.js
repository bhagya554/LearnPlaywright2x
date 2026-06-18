let test_Result = ["Pass", "Fail", "Fail", "Pass"]

test_Result.forEach(function (result, index) {
    console.log(`Index: ${index}  Value: ${result}`)
})

/*
anonymous function which is called inside forEach is a callBack Function,Synchronous in nature
----------------------------------------------------------------------------------------------
anonymous function is a callback function because:
------------------------------------------------------
    >It is passed as an argument to forEach
    >forEach calls it internally for each element

Why is forEach callback synchronous?
------------------------------------
Because:

    >forEach executes immediately
    >It processes each element one by one
    >It does NOT wait or defer execution

JavaScript does:
----------------
Take first element → run callback
Take second element → run callback
Continue until array ends

👉 All this happens instantly, in order
*/


/*
It is a Perfect example for synchronous callback where anonymous fn will take the item 1 by 1,
takes index 1 by 1, prints the value 1 by 1
*/
