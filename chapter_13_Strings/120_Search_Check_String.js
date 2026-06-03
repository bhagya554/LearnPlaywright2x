let url="https://staging.vwo.com/api/login?retry=true"

//includes
console.log(url.includes("staging"));//true
console.log(url.includes("production"));//false
console.log(url.startsWith("https"));//true
console.log(url.endsWith("true"));//true

//indexOf/lastIndexOf
console.log(url.indexOf("s"))
console.log(url.lastIndexOf("n"))

console.log(url.indexOf("nothere"))//-1
console.log(url.indexOf("x"))//-1

console.log(url.search(/login/));//28
console.log(url.search(/vwo/));//16

//regex - / - regular expression