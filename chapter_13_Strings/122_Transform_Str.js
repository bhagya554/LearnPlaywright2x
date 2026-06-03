let str=" Hello, World! ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());

console.log(str.trimStart());
console.log(str.trimEnd());

let msg="Test:FAIL.Retry:FAIL"
console.log(msg.replace("FAIL","PASS"))
console.log(msg.replaceAll("FAIL","PASS"))
console.log(msg.replace(/FAIL/g,"PASS"))

//Concatenation
console.log("Hello" + " " + "World!")
console.log("Hello".concat(" ","Bhagya"))
console.log(`${"Hello"} ${"Jaasri"}`)


let url="https://app.vwo.com?app=pramod"
console.log(url.replace(/app/g,'qa'))

let r="pass,fail,skip"
let rArray = r.split(",")
console.log(rArray)

let s="test:login:pass".split(":").join("_")
console.log(s)

let parts=["2026","06","03"]
console.log(parts.join("-"))
