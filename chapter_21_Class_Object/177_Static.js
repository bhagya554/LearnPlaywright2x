class Student{
    constructor(name,age,phnNo){
        this.name=name;
        this.age=age;
        this.phnNo=phnNo;
    }

    static instituteName="playwright_1x"
    static instructor="bhagya"

    static display(){
        console.log("My instructor is :"+this.instructor)
    }
}

const x1=new Student("pani",23,"232334123")
Student.display();
console.log(Student.instituteName)
console.log(Student.instructor)