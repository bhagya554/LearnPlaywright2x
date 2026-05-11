const baseURL="https://gmail.com"
//baseURL="https://google.com" //TypeError: Assignment to constant variable.
//const baseURL="hello"//SyntaxError: Identifier 'baseURL' has already been declared

let name="pending"
{
    let name="bhagya"
    console.log("Inside block ",name)
}

function say(){
    let name="sahitya"
    console.log("Inside Fn ",name)
    if(true){
        let name="hari"
        console.log("Inside If ",name)
    }
    console.log("Outside IF ",name)
}
say()

console.log("global ",name)