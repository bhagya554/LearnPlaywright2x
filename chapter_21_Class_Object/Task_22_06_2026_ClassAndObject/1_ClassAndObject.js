class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        console.log("Addition:", this.num1 + this.num2)
    }
    sub() {
        console.log("Subtraction:", this.num1 - this.num2)
    }
    mul() {
        console.log("Multiplication:", this.num1 * this.num2)
    }
    div() {
        console.log("Division:", this.num1 / this.num2)
    }
    mod(){
        console.log("Remainder:",this.num1%this.num2)
     }
}

const cal=new Calculator(56,8)
cal.add()
cal.sub()
cal.mul()
cal.div()
cal.mod()