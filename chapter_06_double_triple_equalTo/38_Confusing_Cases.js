// 38 Confusing Cases: == vs ===

// --- Number vs String ---
console.log("1:", 42 == "42")   // true  - "42" coerces to 42
console.log("2:", 42 === "42")  // false - different types

// --- Falsy coercion ---
console.log("3:", 0 == "")     // true  - "" coerces to 0
console.log("4:", 0 === "")    // false - number vs string
console.log("5:", "" == "0")   // false - both strings, no coercion
console.log("6:", 0 == "0")    // true  - "0" coerces to 0

// --- Boolean coercion ---
console.log("7:", true == 1)   // true  - true coerces to 1
console.log("8:", true === 1)  // false - different types
console.log("9:", true == 2)   // false - true->1, 1!=2
console.log("10:", false == 0) // true  - false coerces to 0
console.log("11:", false == "")// true  - both coerce to 0

// --- null and undefined ---
console.log("12:", null == undefined)  // true  - special rule
console.log("13:", null === undefined) // false - different types
console.log("14:", null == 0)          // false - null only == undefined
console.log("15:", null == false)      // false - null only == undefined
console.log("16:", undefined == false) // false - undefined only == null

// --- NaN madness ---
console.log("17:", NaN == NaN)  // false - NaN never equals itself
console.log("18:", NaN === NaN) // false - same reason
console.log("19:", NaN == false)// false - NaN != anything

// --- Array coercion ---
console.log("20:", [1] == 1)    // true  - [1] -> "1" -> 1
console.log("21:", [1] == "1")  // true  - [1] -> "1"
console.log("22:", [1] === "1") // false - object vs string
console.log("23:", [] == 0)     // true  - [] -> "" -> 0
console.log("24:", [] == false) // true  - [] -> "" -> 0, false -> 0
console.log("25:", [] == ![])   // true  - ![] -> false, [] -> "" -> 0, false -> 0

// --- Object coercion ---
console.log("26:", [1,2] == "1,2")  // true  - [1,2] -> "1,2"
console.log("27:", {} == "[object Object]") // true
console.log("28:", {a:1} == "[object Object]") // true

// --- WTF cases ---
console.log("29:", ![] == [])    // true  - ![] -> false, [] -> "" -> 0, false -> 0
console.log("30:", [] == ![])    // true  - symmetric
console.log("31:", [] == 0)      // true  - [] -> "" -> 0
console.log("32:", "\t" == 0)    // true  - whitespace trimmed -> "" -> 0
console.log("33:", "\n" == 0)    // true  - same as above
console.log("34:", " " == 0)     // true  - " " -> "" -> 0

// --- Number vs boolean vs string triangle ---
console.log("35:", "1" == true)  // true  - true->1, "1"->1
console.log("36:", "1" === true) // false - string vs boolean
console.log("37:", "false" == false) // false - "false" is non-empty string -> NaN, false->0
console.log("38:", "\t\r\n" == 0)    // true  - whitespace-only -> "" -> 0
