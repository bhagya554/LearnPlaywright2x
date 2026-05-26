let browser=["chrome","firefox","safari","opera","edge"]
console.log(browser.length)
console.log(browser)


browser.pop();//removes from end
console.log(browser)

let removed=browser.shift()//removes from begin
console.log(browser)
console.log(removed)

//iterate over array
console.log("iterate over array")
for(let i=0;i<browser.length;i++){
    console.log(browser[i])
    if(browser[i]==='opera'){
        console.log("opera is removed from selenium")
    }
}