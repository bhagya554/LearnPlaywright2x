class Testcase {
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }

    display() {
        console.log(this.name + "->" + this.status + "->" + this.priority)
    }
}

function f1() {

}

let loginTC = new Testcase("Login Test", "Pass", "P0");
let signUpTC = new Testcase("SignUp Test", "Fail", "P1")
loginTC.display();

// Function vs Method
// method is a function but inside the class :)
//function is outside a class
